package formaterror

import (
    "errors"
    "strings"
)

func FormatError(err string) error {
    if strings.Contains(err, "username") {
        return errors.New("Username already taken")
    }

    if strings.Contains(err, "email") {
        return errors.New("Email already exists")
    }

    if strings.Contains(err, "title") {
        return errors.New("Title already exits")
    }

    if strings.Contains(err, "hashedPassword") {
        return errors.New("Incorrect Password")
    }

    return errors.New("Incorrect details")
}
