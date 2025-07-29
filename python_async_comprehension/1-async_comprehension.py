#!/usr/bin/env python3
'''
Import async_generator from the previous task
'''
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    '''
    Import async_generator from the previous task
    '''
    comprehension_list = []
    async for index in async_generator():
        if len(comprehension_list) == 10:
            break
        comprehension_list.append(index)
    return comprehension_list
