#!/usr/bin/env python3
"""Serve docs/ locally for preview.

Plain `python -m http.server` can truncate large responses (like
data.json) intermittently on Windows over the default HTTP/1.0
no-keep-alive path. This forces HTTP/1.1 with a threading server, which
is more reliable for larger static files.

Usage: python scripts/serve.py [port]
"""
import http.server
import socketserver
import sys
from pathlib import Path

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
DOCS_DIR = Path(__file__).resolve().parent.parent / "docs"


class Handler(http.server.SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DOCS_DIR), **kwargs)


class Server(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True


if __name__ == "__main__":
    with Server(("127.0.0.1", PORT), Handler) as httpd:
        print(f"Serving {DOCS_DIR} at http://127.0.0.1:{PORT}")
        httpd.serve_forever()
