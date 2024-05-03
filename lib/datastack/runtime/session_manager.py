from datastack.runtime.app_session import AppSession


class SessionManager():
    """ Manage sessions lifecycle. session closly tied with browser tab"""
    def __init__(self) -> None:
        self._active_session_info_by_id = {}

    def connect_session(self, client, id):
        session = AppSession(id)
        self._active_session_info_by_id[session.id] = "info"
        return session.id
    
    def disconnect_session(self, session_id):
        del self._active_session_info_by_id[session_id]

    def get_active_session_info(self, session_id):
        return self._active_session_info_by_id.get(session_id)
