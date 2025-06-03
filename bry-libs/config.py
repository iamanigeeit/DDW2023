class Config():
    BRYTHON_COMMUNICATOR = 'py_id'
    CANVAS_OUTPUT = False
    CANVAS_ID = f'id_canvas'
    GRAPHICS_ID = f'id_graphics'
    OUTPUT_DIV = f'id_brython_result'

    @staticmethod
    def set_id(node_id):
        Config.BRYTHON_COMMUNICATOR = f'py_{node_id}'
        Config.CANVAS_ID = f'{node_id}_canvas'
        Config.GRAPHICS_ID = f'{node_id}_graphics'
        Config.OUTPUT_DIV = f'{node_id}_brython_result'
