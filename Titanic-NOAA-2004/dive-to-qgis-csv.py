#!/usr/bin/python3

import sys
import math

for input in sys.argv[1:]:
    print("Opening input {}".format(input))
    with open(input) as file:
        count = 0
        for _line in file:
            count = count + 1
            if count == 1:
                continue
            s = _line.split(" ")
            if len(s) != 10:
                continue
            timestamp = s[0]
            lat = s[3]
            lon = s[4]
            depth = float(s[8])
            alt = float(s[9])

            if depth > 3740 and not math.isnan(alt):
                print(f"{timestamp},{lat},{lon},{depth},{input}-{timestamp}")

