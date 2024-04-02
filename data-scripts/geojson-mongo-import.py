#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Bulk import GeoJSON file into MongoDB Atlas cluster
Note: This script is compatible with MongoDB 3.2 or higher.

Example usage:
Given an input file named "points.geojson" having GeoJSON points
into destination DB "geospatial" and collection named "points"

python geojson-mongo-import.py -f points.geojson -d geospatial -c points -uri "mongodb+srv://trapnvte:axNEbvrI9udAMmIb@cluster0.8gj2rpx.mongodb.net/"
"""

import argparse
import json
from pymongo import MongoClient, GEOSPHERE
from pymongo.errors import BulkWriteError
from pymongo.operations import InsertOne

parser = argparse.ArgumentParser(description='Bulk import GeoJSON file into MongoDB Atlas')
parser.add_argument('-f', required=True, help='input file')
parser.add_argument('-uri', required=True, help='MongoDB Atlas connection URI')
parser.add_argument('-d', required=True, help='target database name')
parser.add_argument('-c', required=True, help='target collection to insert to')
args = parser.parse_args()

inputfile = args.f
to_collection = args.c
to_database = args.d
connection_uri = args.uri

client = MongoClient(connection_uri)
db = client[to_database]
collection = db[to_collection]

# Create 2dsphere index
collection.create_index([("geometry", GEOSPHERE)])

# Create an index on GEOID for fast lookup of specific census tracts
collection.create_index([("properties.GEOID", 1)])

# Prepare bulk insert operations
operations = [InsertOne(feature) for feature in json.load(open(inputfile, 'r'))['features']]

# Execute bulk write operation
try:
    result = collection.bulk_write(operations)
    print(f"Number of features successfully inserted: {result.inserted_count}")
except BulkWriteError as bwe:
    print("Errors encountered inserting features.")
    print(f"Number of features successfully inserted: {bwe.details['nInserted']}")
    for error in bwe.details.get('writeErrors', []):
        print(f"Index of feature: {error['index']}, Error: {error['errmsg'][:120]}...")
