#!/bin/bash

BASE_DIR="codehq-pro/content/docs/dsa"

create_page() {
    local category=$1
    local slug=$2
    local title=$3
    local file="$BASE_DIR/$category/$slug.mdx"
    
    mkdir -p "$(dirname "$file")"

    cat <<EOF > "$file"
---
title: $title
description: Learn about $title
---

# $title

## Overview
Detailed explanation of $title goes here.

## Key Concepts
- Concept 1
- Concept 2

## Code Example
```typescript
function example() {
  console.log('Hello $title');
}
```

## Practice Problems
1. [Problem 1](https://leetcode.com)
2. [Problem 2](https://leetcode.com)
EOF
}

# Arrays
create_page "arrays" "two-pointers" "Two Pointers"
create_page "arrays" "sliding-window" "Sliding Window"
create_page "arrays" "2d-matrix" "2D Matrix"
create_page "arrays" "prefix-sum" "Prefix Sum & Product"
create_page "arrays" "kadanes-algorithm" "Kadane's Algorithm"
create_page "arrays" "dutch-national-flag" "Dutch National Flag Algorithm"
create_page "arrays" "moores-voting" "Moore's Voting Algorithm"

# Strings
create_page "strings" "pattern-matching" "Pattern Matching (KMP, Rabin-Karp)"
create_page "strings" "palindrome-patterns" "Palindrome Patterns"
create_page "strings" "anagrams" "Anagram Problems"
create_page "strings" "string-compression" "String Compression"

echo "Pages created successfully."

