class ScriptRunner:
    def run():
        with open('datastack/user_script.py') as f:
                    filebody = f.read()

        print(filebody)