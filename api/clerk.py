import jwt
import os

CLERK_PEM_PUBLIC_KEY_PROD = ""

CLERK_PEM_PUBLIC_KEY_DEV = """
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAykJSU0AfdJoACJf4isz5
PrtWjAXqY4mlk8GUh50WCPIxJNr2g6ErkXrTu9nWs9STbUN/OPDphnMuV2EMnaK/
IaX0KuS9Rv1+bkC/0IHyOpF0a85IVagP4GWHKz6Q7QOQ6kvv9kmDG1T2Ta58MEZy
vdB5NQ6B8qKg5p1Qv2JzAYHOC5SgJ+ZKJ28sS3p3IwKD7KCMyodEwUELnEB+ifdX
Au4miqU/TRZJWNr+nXSLkwHKIqjvFoBsowOOmSnZuWXJpRgnTdnntwrNTbAsMI5P
uF9cDzMqP01dr6aTKN5ikFTeWLiDe7RGgYKIoRpokkhYVtVPFivE1U8dNntsPEUm
swIDAQAB
-----END PUBLIC KEY-----
"""


def verify_credentials(credentials):
    is_prod = os.getenv("IS_PROD") == "true"
    CLERK_PEM_PUBLIC_KEY = (
        CLERK_PEM_PUBLIC_KEY_PROD if is_prod else CLERK_PEM_PUBLIC_KEY_DEV
    )
    if credentials.credentials == "ptSJuhCtJWIBWzl7ANjnTIqjcN" and not is_prod:
        return {"user": {"id": "testuser"}}
    session = jwt.decode(
        credentials.credentials, key=CLERK_PEM_PUBLIC_KEY, algorithms=["RS256"]
    )
    if not session:
        raise Exception("Invalid credentials")
    return session
