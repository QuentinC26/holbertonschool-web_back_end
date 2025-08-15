#!/usr/bin/env python3
'''
Write a function named index_range that takes two integer arguments
'''
import csv
import math
from typing import List, Tuple, Dict, Any


def index_range(page: int, page_size: int) -> Tuple:
    '''
    Write a function named index_range that takes two integer arguments
    '''
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)


class Server:
    """
    Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        get page part
        """
        assert isinstance(page, int) and isinstance(page_size, int)
        assert page > 0 and page_size > 0
        start_index, end_index = index_range(page, page_size)
        if start_index >= len(self.dataset()):
            return []
        return self.dataset()[start_index:end_index]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """
        get hyper part
        """
        get_page = self.get_page
        result = len(self.dataset()) / page_size
        dictionnary = {
            "page_size": len(get_page(page, page_size)),
            "page": page,
            "data": get_page(page, page_size),
            "next_page": page + 1,
            "prev_page": page - 1,
            "total_pages": math.ceil(result)
        }
        if dictionnary["next_page"] > dictionnary["total_pages"]:
            dictionnary["next_page"] = None
        if dictionnary["prev_page"] < 1:
            dictionnary["prev_page"] = None
        return dictionnary
