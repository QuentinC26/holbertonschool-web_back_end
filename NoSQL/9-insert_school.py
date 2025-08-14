#!/usr/bin/env python3
"""
inserts a new document in a collection based on kwargs
"""


def insert_school(mongo_collection, **kwargs):
    """
    inserts a new document in a collection based on kwargs
    """
    insert_new_element = mongo_collection.insert_one(kwargs)
    return insert_new_element.inserted_id
