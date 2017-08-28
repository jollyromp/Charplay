/**
 * @flow
 * @relayHash fb6de90e19c7526c5042e81f656563a8
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RoomContainerQueryResponse = {|
  +room: ?$ReadOnlyArray<?{|
    +_id: ?string;
    +url: ?string;
    +description: ?string;
    +name: ?string;
  |}>;
|};
*/


/*
query RoomContainerQuery(
  $roomUrl: String!
) {
  room(url: $roomUrl) {
    _id
    url
    description
    name
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "roomUrl",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RoomContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "url",
            "variableName": "roomUrl",
            "type": "String"
          }
        ],
        "concreteType": "room",
        "name": "room",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "_id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "url",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "description",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "RoomContainerQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "roomUrl",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "RoomContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "url",
            "variableName": "roomUrl",
            "type": "String"
          }
        ],
        "concreteType": "room",
        "name": "room",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "_id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "url",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "description",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query RoomContainerQuery(\n  $roomUrl: String!\n) {\n  room(url: $roomUrl) {\n    _id\n    url\n    description\n    name\n  }\n}\n"
};

module.exports = batch;
