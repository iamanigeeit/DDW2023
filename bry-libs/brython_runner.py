from browser import document  # type: ignore
import sys
import time
from config import Config  # type: ignore
from py_back_trace import notify, EventOutput, print_exc  # type: ignore


def run(code, node_id, line_shift):

    sys.stdout = EventOutput(node_id, 'stdout')
    sys.stderr = EventOutput(node_id, 'stderr')
    notify(node_id, {'type': 'start', 'time': time.time()})
    Config.set_id(node_id)
    try:
        ns = sys.modules['__main__'].__dict__
        ns['RESULT_DIV'] = document[Config.OUTPUT_DIV]
        exec(code, ns)
    except Exception as exc:
        print_exc(file=sys.stderr, line_shift=line_shift)
    finally:
        notify(node_id, {'type': 'done', 'time': time.time()})

    sys.stdout.flush()
    sys.stderr.flush()
