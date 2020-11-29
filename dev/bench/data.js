window.BENCHMARK_DATA = {
  "lastUpdate": 1606668196465,
  "repoUrl": "https://github.com/loyd/tokio",
  "entries": {
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c55d846f4b248b4a72335d6c57829fa6396ab9a5",
          "message": "util: add rt to tokio-util full feature (#3194)",
          "timestamp": "2020-11-29T09:48:31+01:00",
          "tree_id": "5f27b29cd1018796f0713d6e87e4823920ba5084",
          "url": "https://github.com/loyd/tokio/commit/c55d846f4b248b4a72335d6c57829fa6396ab9a5"
        },
        "date": 1606668067890,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 199336,
            "range": "± 28519",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 733466,
            "range": "± 100952",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5426271,
            "range": "± 672184",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20837047,
            "range": "± 2407771",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c55d846f4b248b4a72335d6c57829fa6396ab9a5",
          "message": "util: add rt to tokio-util full feature (#3194)",
          "timestamp": "2020-11-29T09:48:31+01:00",
          "tree_id": "5f27b29cd1018796f0713d6e87e4823920ba5084",
          "url": "https://github.com/loyd/tokio/commit/c55d846f4b248b4a72335d6c57829fa6396ab9a5"
        },
        "date": 1606668085743,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6703809,
            "range": "± 2668012",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6547663,
            "range": "± 1233102",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6092281,
            "range": "± 2753659",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 911,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 909,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 909,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 66337,
            "range": "± 4774",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1047,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1039522,
            "range": "± 100773",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 747343,
            "range": "± 76804",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c55d846f4b248b4a72335d6c57829fa6396ab9a5",
          "message": "util: add rt to tokio-util full feature (#3194)",
          "timestamp": "2020-11-29T09:48:31+01:00",
          "tree_id": "5f27b29cd1018796f0713d6e87e4823920ba5084",
          "url": "https://github.com/loyd/tokio/commit/c55d846f4b248b4a72335d6c57829fa6396ab9a5"
        },
        "date": 1606668171534,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1056,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15693,
            "range": "± 7043",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1051,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14584,
            "range": "± 2828",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 595,
            "range": "± 81",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c55d846f4b248b4a72335d6c57829fa6396ab9a5",
          "message": "util: add rt to tokio-util full feature (#3194)",
          "timestamp": "2020-11-29T09:48:31+01:00",
          "tree_id": "5f27b29cd1018796f0713d6e87e4823920ba5084",
          "url": "https://github.com/loyd/tokio/commit/c55d846f4b248b4a72335d6c57829fa6396ab9a5"
        },
        "date": 1606668187318,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14815,
            "range": "± 3735",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1082,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 645,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16475,
            "range": "± 6347",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1080,
            "range": "± 57",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}