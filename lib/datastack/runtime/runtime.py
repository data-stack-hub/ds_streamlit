import asyncio
from enum import Enum
from datastack.runtime.session_manager import SessionManager

class RuntimeState(Enum):
    INITIAL = "INITIAL"
    NO_SESSIONS_CONNECTED = "NO_SESSIONS_CONNECTED"
    ONE_OR_MORE_SESSIONS_CONNECTED = "ONE_OR_MORE_SESSIONS_CONNECTED"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"
    
class Runtime:
    _instance = None

    @classmethod
    def instance(cls):
        "return the singleton Runtime instance."
        if cls._instance is None:
            raise Exception("Runtime none")
        return cls._instance

    @classmethod
    def exists(cls):
        "Check if Runtime exists. True is Runtime available"
        return cls._instance is not None

    def __init__(self) -> None:
        # get session manager
        self._session_mgr = SessionManager()
        self._state = RuntimeState.INITIAL
        # start session manager
        pass

    async def start(self):
        """start runtime"""
        self._loop_coroutine_task = asyncio.create_task(self._loop_coroutine(), name="Runtime.loop_coroutine")
        await asyncio.sleep(1)  # Use sleep or another appropriate method

    def stop(self):
        """Close all sessions and stop Runtime"""
        # stop runtime

    def connect_session(self, client, id):
        if self._state in (RuntimeState.STOPPING, RuntimeState.STOPPED):
            raise Exception(f"Can't connect_session (state={self._state})")
        session_id = self._session_mgr.connect_session(client= client, id=id)
        self._set_state(RuntimeState.ONE_OR_MORE_SESSIONS_CONNECTED)
        return session_id

    def close_session(self, session_id):
        "Close session"
        session_info = self._session_mgr.get_session_info(session_id)
        if session_info:
            self._session_mgr.close_session(session_id)
    
    def handle_msg(self, session_id):
        session_info = self._session_mgr.get_active_session_info(session_id)
        session_info.session.handle_msg()

    async def _loop_coroutine(self):
        """Main Runtime loop."""
        while True:
            print("Runtime")
            await asyncio.sleep(1)  # Use sleep or another appropriate method
     
    def _on_session_disconnected(self):
        """Check if all session disconnected"""
        if( self._state == Runtime.ONE_OR_MORE_SESSIONS_CONNECTED and self._session_mgr.num_active_sessions() == 0):
            self._set_state(Runtime.NO_SESSIONS_CONNECTED)

    def _set_state(self, new_state: RuntimeState) -> None:
        self._state = new_state
# # test
# rt = Runtime()

# # Create an event loop
# loop = asyncio.get_event_loop()

# # Run the start method using the event loop
# loop.run_until_complete(rt.start())

# # connect client
# rt.connect_session('')

