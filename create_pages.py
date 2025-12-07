import os

base_dir = "codehq-pro/content/docs/dsa"

def create_page(category, slug, title):
    file_path = os.path.join(base_dir, category, f"{slug}.mdx")
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    
    content = f"""---
title: {title}
description: Learn about {title}
---

# {title}

## Overview
Detailed explanation of {title} goes here.

## Key Concepts
- Concept 1
- Concept 2

## Code Example
```typescript
function example() {{
  console.log('Hello {title}');
}}
```

## Practice Problems
1. [Problem 1](https://leetcode.com)
2. [Problem 2](https://leetcode.com)
"""
    with open(file_path, "w") as f:
        f.write(content)

# Arrays
create_page("arrays", "two-pointers", "Two Pointers")
create_page("arrays", "sliding-window", "Sliding Window")
create_page("arrays", "2d-matrix", "2D Matrix")
create_page("arrays", "prefix-sum", "Prefix Sum & Product")
create_page("arrays", "kadanes-algorithm", "Kadane's Algorithm")
create_page("arrays", "dutch-national-flag", "Dutch National Flag Algorithm")
create_page("arrays", "moores-voting", "Moore's Voting Algorithm")

# Strings
create_page("strings", "pattern-matching", "Pattern Matching (KMP, Rabin-Karp)")
create_page("strings", "palindrome-patterns", "Palindrome Patterns")
create_page("strings", "anagrams", "Anagram Problems")
create_page("strings", "string-compression", "String Compression")

print("Pages created successfully.")
