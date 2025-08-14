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
print ("method GET:", nginx.count_documents({"method": "GET"}), "status check")
print ("method POST:", nginx.count_documents({"method": "POST"}), "status check")
print ("method PUT:", nginx.count_documents({"method": "PUT"}), "status check")
print ("method PATCH:", nginx.count_documents({"method": "PATCH"}), "status check")
print ("method DELETE:", nginx.count_documents({"method": "DELETE"}), "status check")
print (nginx.count_documents({"method": "GET", "path": "/status"}), "status check")
