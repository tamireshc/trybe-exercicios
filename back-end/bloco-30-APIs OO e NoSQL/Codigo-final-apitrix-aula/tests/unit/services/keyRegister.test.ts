import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
// import sinon from 'sinon';
// import { Model } from 'mongoose';
import Key from '../../../src/Domain/Key/Key';
import IKey from '../../../src/Interfaces/IKey';
import KeyService from '../../../src/Services/KeyService';

const RESULT_ERROR = 'Invalid Key';

describe('Deveria validar e criar chaves', function () {
  it('Criando uma chave de tipo CPF com SUCESSO', async function () {
    const keyInput: IKey = {
      value: '478.966.190-32',
      owner: 'Jack C.',
      type: 'cpf',
    };
    const keyOutput: Key = new Key(
      '478.966.190-32',
      'Jack C.',
      'cpf',
      '633ec9fa3df977e30e993492',
    );
    sinon.stub(Model, 'create').resolves(keyOutput);

    const service = new KeyService();
    const result = await service.register(keyInput);

    expect(result).to.be.deep.equal(keyOutput);
  });

  it('Criando uma chave de tipo CPF inválida', async function () {
    const keyInput: IKey = {
      value: '478.966.190-32XX',
      owner: 'Jack C.',
      type: 'cpf',
    };
    sinon.stub(Model, 'create').resolves({});
    
    try {
      const service = new KeyService();
      await service.register(keyInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal(RESULT_ERROR);
    }
  });

  it('Criando uma chave de tipo Phone Number com SUCESSO', async function () {
    const keyInput: IKey = {
      value: '+55 (18) 99999-8888',
      owner: 'Abreu L.',
      type: 'phonenumber',
    };
    const keyOutput: Key = new Key(
      '+55 (18) 99999-8888',
      'Abreu L.',
      'phonenumber',
      '633ec9fa3df977e30e993492',
    );
    sinon.stub(Model, 'create').resolves(keyOutput);

    const service = new KeyService();
    const result = await service.register(keyInput);

    expect(result).to.be.deep.equal(keyOutput);
  });

  it('Criando chave de tipo Phone Number é inválida', async function () {
    const keyInput: IKey = {
      value: '9999-8888',
      owner: 'Abreu L.',
      type: 'phonenumber',
    };
    sinon.stub(Model, 'create').resolves({});
    
    try {
      const service = new KeyService();
      await service.register(keyInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal(RESULT_ERROR);
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});
