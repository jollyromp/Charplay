/**
 * @flow
 * @relayHash f926b8704d04b958bb5ddf8a703d608c
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RoomListContainerQueryResponse = {|
  +room: ?$ReadOnlyArray<?{|
    +_id: ?string;
    +url: ?string;
    +description: ?string;
    +name: ?string;
  |}>;
|};
*/


/*
query RoomListContainerQuery {
  room {
    _id
    url
    description
    name
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RoomListContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
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
    "type": "RootQueryType"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "RoomListContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "RoomListContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
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
  "text": "query RoomListContainerQuery {\n  room {\n    _id\n    url\n    description\n    name\n  }\n}\n"
};

module.exports = batch;
