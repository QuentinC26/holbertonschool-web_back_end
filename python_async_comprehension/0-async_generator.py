#!/usr/bin/env python3
'''
create a generator
'''
import asyncio
import random
from typing import Union, List


async def async_generator() -> List[Union[int, float]]:
    '''
    create a generator
    '''
    for index in range(10):
        await asyncio.sleep(1)
        yield random.randint(0, 10)
