#!/usr/bin/env python3
"""
returns the list of school having a specific topic
"""


def schools_by_topic(mongo_collection, topic):
    """
    returns the list of school having a specific topic
    """
    list_of_topic = mongo_collection.find({"topic": topic})
    return list(list_of_topic)
