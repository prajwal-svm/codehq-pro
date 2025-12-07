#!/bin/bash

BASE_DIR="codehq-pro/content/docs/dsa"
mkdir -p "$BASE_DIR"

# Function to create category and index file
create_category() {
    local folder_name=$1
    local title=$2
    local description=$3
    local dir="$BASE_DIR/$folder_name"
    
    mkdir -p "$dir"
    
    # Create index.mdx if it doesn't exist
    if [ ! -f "$dir/index.mdx" ]; then
        echo "---
title: $title
description: $description
---

## Topics

Everything you need to know about $title.
" > "$dir/index.mdx"
    fi
}

create_category "arrays" "Arrays" "Master array manipulation, pointers, and sliding windows."
create_category "strings" "Strings" "Pattern matching, anagrams, and text processing."
create_category "hashing" "Hashing" "Hash maps, sets, and frequency counting."
create_category "linked-lists" "Linked Lists" "Pointer manipulation and list operations."
create_category "stacks" "Stacks" "LIFO operations, monotonic stacks, and expression parsing."
create_category "queues" "Queues" "FIFO operations, sliding windows, and BFS."
create_category "trees" "Trees" "Binary trees, BSTs, traversals, and views."
create_category "heaps" "Heaps" "Priority queues, top-k elements, and median finding."
create_category "graphs" "Graphs" "DFS, BFS, shortest paths, and network flow."
create_category "tries" "Tries" "Prefix trees and autocomplete systems."
create_category "searching" "Searching" "Binary search variations and search spaces."
create_category "sorting" "Sorting" "Merge sort, quick sort, and topological sorting."
create_category "recursion" "Recursion" "Backtracking, permutations, and subsets."
create_category "greedy" "Greedy" "Optimization problems and interval selection."
create_category "divide-conquer" "Divide & Conquer" "Merge sort, quick select, and geometric algorithms."
create_category "dynamic-programming" "Dynamic Programming" "The ultimate guide to DP patterns."
create_category "bitwise" "Bitwise" "Bit manipulation, XOR, and masks."
create_category "math-geometry" "Math & Geometry" "Number theory, primes, and geometric algorithms."

echo "Categories created."
