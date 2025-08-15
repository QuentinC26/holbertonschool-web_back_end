#!/usr/bin/env python3
"""
provides some stats about Nginx logs stored in MongoDB
"""
import pymongo

logs = pymongo.MongoClient("mongodb://localhost:27017/")
nginx = logs["logs"]["nginx"]
number_of_documents = nginx.count_documents({})
print (f"{number_of_documents} logs")
print ("Methods:")
print ("\tmethod GET:", nginx.count_documents({"method": "GET"}))
print ("\tmethod POST:", nginx.count_documents({"method": "POST"}))
print ("\tmethod PUT:", nginx.count_documents({"method": "PUT"}))
print ("\tmethod PATCH:", nginx.count_documents({"method": "PATCH"}))
print ("\tmethod DELETE:", nginx.count_documents({"method": "DELETE"}))
print (nginx.count_documents({"method": "GET", "path": "/status"}), "status check")
