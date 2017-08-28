/**
 * @flow
 * @relayHash ca94ffbde7c5aefc89e74c9fa3845479
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type MessageFormContainerMutationVariables = {|
  content: string;
  author: string;
  room: string;
  character: string;
|};

export type MessageFormContainerMutationResponse = {|
  +message: ?{|
    +_id: ?string;
  |};
|};
*/


/*
mutation MessageFormContainerMutation(
  $content: String!
  $author: String!
  $room: String!
  $character: String!
) {
  message(content: $content, _author: $author, _room: $room, _character: $character) {
    _id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "content",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "author",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "room",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "character",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "MessageFormContainerMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "_author",
            "variableName": "author",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "_character",
            "variableName": "character",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "_room",
            "variableName": "room",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "content",
            "variableName": "content",
            "type": "String!"
          }
        ],
        "concreteType": "message",
        "name": "message",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "_id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "MessageFormContainerMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "content",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "author",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "room",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "character",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "MessageFormContainerMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "_author",
            "variableName": "author",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "_character",
            "variableName": "character",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "_room",
            "variableName": "room",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "content",
            "variableName": "content",
            "type": "String!"
          }
        ],
        "concreteType": "message",
        "name": "message",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "_id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation MessageFormContainerMutation(\n  $content: String!\n  $author: String!\n  $room: String!\n  $character: String!\n) {\n  message(content: $content, _author: $author, _room: $room, _character: $character) {\n    _id\n  }\n}\n"
};

module.exports = batch;
