class Permissions
  include Ruby::Enum

  define :GUEST, 0
  define :USER, 1
  define :ADMIN, 2
end