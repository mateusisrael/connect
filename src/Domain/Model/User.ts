export interface User {
  id: string
  name: string
  contact: UserContact;
  profilePhotoUrl?: string;
}

interface UserContact {
  type: "email" | "phone";
  value: string;
}
