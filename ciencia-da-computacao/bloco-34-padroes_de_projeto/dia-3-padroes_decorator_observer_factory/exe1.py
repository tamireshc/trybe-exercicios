# Crie novas classes, LogError(), LogWarning, LogSuccess() com o padrão
# Decorator, para imprimir colorido as seguintes frases de Log:

# Success(Verde): O sistema está funcionando

# Warning(Laranja): O sistema está lento

# Error(Vermelho): O sistema está com erros

ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"


class Log:
    def dispara_log(message):
        return message


class Colorize:
    def colorize_message(color: str, message):
        return f"{eval(color.upper())}{message}{RESET}"


class LogError:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log_error(self, message):
        return self.log.dispara_log(
            Colorize.colorize_message("vermelho", message)
        )


class LogWarning:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log_warning(self, message):
        return self.log.dispara_log(
            Colorize.colorize_message("laranja", message)
        )


class LogSuccess:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log_success(self, message):
        return self.log.dispara_log(
            Colorize.colorize_message("verde", message)
        )


log = Log
logError = LogError(log)
print(logError.dispara_log_error("O sistema está com erros"))
print(LogWarning(log).dispara_log_warning("O sistema está lento"))
print(LogSuccess(log).dispara_log_success("O sistema está funcionando"))
