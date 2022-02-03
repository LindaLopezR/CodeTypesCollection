import { Mongo } from 'meteor/mongo';

class CodeTypesCollection extends Mongo.Collection {

}

export const CodeTypes = new CodeTypesCollection('codeTypes');
CodeTypes.attachBehaviour('timestampable');
