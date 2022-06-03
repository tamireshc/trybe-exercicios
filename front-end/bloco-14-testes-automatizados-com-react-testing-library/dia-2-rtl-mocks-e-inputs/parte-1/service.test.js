const testes = require('./service')

test("#Numero aleatório", () => {

  testes.aleatoryNumber = jest.fn().mockReturnValue(10);
  expect(testes.aleatoryNumber()).toBe(10)
  expect(testes.aleatoryNumber).toHaveBeenCalled();
  expect(testes.aleatoryNumber).toHaveBeenCalledTimes(1);
  testes.aleatoryNumber.mockRestore()

})

test("#divisivel", () => {
  jest.spyOn(testes, "aleatoryNumber").mockImplementation((a, b) => a / b);
  expect(testes.aleatoryNumber(10, 5)).toBe(2)
  expect(testes.aleatoryNumber).toHaveBeenCalled();
  expect(testes.aleatoryNumber).toHaveBeenCalledTimes(1);
  expect(testes.aleatoryNumber).toHaveBeenCalledWith(10, 5)
  testes.aleatoryNumber.mockRestore()

})

test("#multiplicar 3 parametros", () => {
  testes.aleatoryNumber.mockImplementation((a, b, c) => a * b * c);
  expect(testes.aleatoryNumber(10, 5, 2)).toBe(100)
  expect(testes.aleatoryNumber).toHaveBeenCalled();
  expect(testes.aleatoryNumber).toHaveBeenCalledTimes(1);
  expect(testes.aleatoryNumber).toHaveBeenCalledWith(10, 5, 2)
  testes.aleatoryNumber.mockRestore()

  jest.spyOn(testes, "aleatoryNumber").mockImplementation((a) => a * 2);
  expect(testes.aleatoryNumber(2)).toBe(4)
  expect(testes.aleatoryNumber).toHaveBeenCalled()
  expect(testes.aleatoryNumber).toHaveBeenCalledTimes(1)
  expect(testes.aleatoryNumber).toHaveBeenCalledWith(2)
})

test("parte 4", () => {
  jest.spyOn(testes, "toUpercaseFunction").mockImplementation((string) => string.toLowerCase())
  const lastfunc = jest.spyOn(testes, "firstCaracterOfString").mockImplementation((string) => {
    const lastCaracter = string.split("")
    return lastCaracter[ lastCaracter.length - 1 ]
  })
  const concat3 = jest.spyOn(testes, "concatTwoStrins").mockImplementation((string1, string2, string3) => string1 + string2 + string3)

  expect(testes.toUpercaseFunction('TAMIRES')).toBe('tamires')
  expect(lastfunc('tamires')).toBe('s')
  expect(concat3('tamires', 'sim', 'not')).toBe('tamiressimnot')
  testes.toUpercaseFunction.mockRestore()
})

test('fetchDogApi', async () => {
  const returnApi = {
    message: "https://images.dog.ceo/breeds/entlebucher/n02108000_326.jpg",
    status: "request success"
  }

  jest.spyOn(testes, 'fetchDogsApi').mockResolvedValue({ json: jest.fn().mockResolvedValue(returnApi) })
  testes.fetchDogsApi('https://dog.ceo/api/breeds/image/random')
  expect(testes.fetchDogsApi).toHaveBeenCalled()
  expect(testes.fetchDogsApi).toHaveBeenCalledTimes(1)
  expect(testes.fetchDogsApi).toHaveBeenCalledWith('https://dog.ceo/api/breeds/image/random')
  const doFetch = await testes.fetchDogsApi('https://dog.ceo/api/breeds/image/random')
  // expect(doFetch).resolves.toBe(returnApi) MOCK

  testes.fetchDogsApi.mockRestore()


})