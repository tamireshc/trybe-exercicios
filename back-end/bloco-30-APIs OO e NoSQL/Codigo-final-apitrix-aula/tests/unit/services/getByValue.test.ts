import { expect } from 'chai';
import { describe } from 'mocha';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Key from '../../../src/Domain/Key/Key';
import KeyService from '../../../src/Services/KeyService';

describe('Deveria buscar uma chave por meio de seu valor', () => {
  it('Deveria buscar uma chave por valor com sucesso', async function () {
    const keyOuput: Key = new Key(
      '+55 (18) 99765-1187',
      'Jô Soares',
      'phonenumber',
      '633ec9fa3df977e30e993492',
    );

    sinon.stub(Model, 'findOne').resolves(keyOuput);

    const service = new KeyService();
    const result = await service.getByValue('+55 (18) 99765-1187');

    expect(result).to.be.deep.equal(keyOuput);

    sinon.restore();
  });
});