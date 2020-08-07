export interface TeacherItemProps {
  isFavorite?: boolean
  teacher: TeacherItemDTO
}

export interface TeacherItemDTO {
  id: number
  subject: string
  cost: number
  name: string
  avatar: string
  whatsapp: string
  bio: string
}
