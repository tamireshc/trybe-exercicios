import re

emails = ["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"]

emails_corrects = ["nome@dominio.com", "outro@dominio.com"]


def is_email_at_list(lista):
    list_correct_emails = []
    pattern = "^[a-zA-Z]\w+@\w+\.\w{3}$"
    for email in lista:
        result = re.findall(pattern, email)
        if not len(result) > 0:
            raise ValueError("Email invalido")
        else:
            list_correct_emails.append(result[0])

    return list_correct_emails


# print(is_email_at_list(emails))
# is_email_at_list(emails_corrects)list_correct_emails
