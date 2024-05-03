import asyncio
import uuid


class AppSession:
    """Session data for single session"""

    def __init__(self, id=None) -> None:
        if id:
            self.id = id
        else:
            self.id = str(uuid.uuid4())
        # self._event_loop = asyncio.get_running_loop()

    # handle socketio message
    def handle_msg(self, msg):
        print('msg received', msg)