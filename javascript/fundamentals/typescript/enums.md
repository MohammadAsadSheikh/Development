Enums
Definition

Enums store predefined constant values.

Numeric Enum
enum Status {
  Loading,
  Success,
  Error
}
Usage
let apiStatus: Status =
  Status.Loading;
String Enum
enum Role {
  Admin = "ADMIN",
  User = "USER"
}
Why Enums Useful?

Used for:

roles
permissions
API states
application states