/**
 * @flow
 * @relayHash 8e972f508ddf8b434c30dca7c92537b3
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type apiQueryResponse = {|
  +user: ?$ReadOnlyArray<?{|
    +username: ?string;
    +password: ?string;
  |}>;
|};
*/


/*
query apiQuery {
  user(_id: "59988d2f5c222a4bdbae13e8") {
    username
    password
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "apiQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "_id",
            "value": "59988d2f5c222a4bdbae13e8",
            "type": "String!"
          }
        ],
        "concreteType": "user",
        "name": "user",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "username",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "password",
            "storageKey": null
          }
        ],
        "storageKey": "user{\"_id\":\"59988d2f5c222a4bdbae13e8\"}"
      }
    ],
    "type": "RootQueryType"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "apiQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "apiQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "_id",
            "value": "59988d2f5c222a4bdbae13e8",
            "type": "String!"
          }
        ],
        "concreteType": "user",
        "name": "user",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "username",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "password",
            "storageKey": null
          }
        ],
        "storageKey": "user{\"_id\":\"59988d2f5c222a4bdbae13e8\"}"
      }
    ]
  },
  "text": "query apiQuery {\n  user(_id: \"59988d2f5c222a4bdbae13e8\") {\n    username\n    password\n  }\n}\n"
};

module.exports = batch;
