const turing = {
    "states": [
        {
            // head reading first aplhabet
            "0": {
                //  if first alphabet read is 0
                "write": "",
                "move": "right",
                "next_state": 1
            },
            "1": {
                //  if first alphabet read is 1
                "write": "",
                "move": "right",
                "next_state": 2
            },
            "": {
                //  if first alphabet read is blank . simplest string in case of even length palindrome.
                "write": "",
                "move": "stay",
                "next_state": 8
            }
        },
        {
            "0": {
                // transition for state q1.
                "write": "0",
                "move": "right",
                "next_state": 3
            },
            "1": {
                "write": "1",
                "move": "right",
                "next_state": 3
            },
            "": {
                // simplest string in case of odd length palindrome.
                "write": "",
                "move": "stay",
                "next_state": 8
            }
        },
        {
            "0": {
                // transition for state q2.
                "write": "0",
                "move": "right",
                "next_state": 4
            },
            "1": {
                "write": "1",
                "move": "right",
                "next_state": 4
            },
            "": {
                // simplest string in case of odd length palindrome.
                "write": "",
                "move": "stay",
                "next_state": 8
            }
        },
        {
            "0": {
                // transition for state q3.
                "write": "0",
                "move": "right",
                "next_state": 3
            },
            "1": {
                "write": "1",
                "move": "right",
                "next_state": 3
            },
            "": {
                "write": "",
                "move": "left",
                "next_state": 5
            }
        },
        {
            "0": {
                // transition for state q4.
                "write": "0",
                "move": "right",
                "next_state": 4
            },
            "1": {
                "write": "1",
                "move": "right",
                "next_state": 4
            },
            "": {
                "write": "",
                "move": "left",
                "next_state": 6
            }
        },
        {
            "0": {
                // transition for state q5.
                "write": "",
                "move": "left",
                "next_state": 7
            }
        },
        {
            "1": {
                // transition for state q6.
                "write": "",
                "move": "left",
                "next_state": 7
            }
        },
        {
            "0": {
                // transition for state q7.
                "write": "0",
                "move": "left",
                "next_state": 7
            },
            "1": {
                "write": "1",
                "move": "left",
                "next_state": 7
            },
            "": {
                "write": "",
                "move": "right",
                "next_state": 0
            }
        },
        {
        }
    ]
}