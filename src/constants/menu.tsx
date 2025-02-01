
  import { Activity, House, Plug, Settings } from 'lucide-react'
import { v4 as uuid } from 'uuid'
  
  export type FieldProps = {
    label: string
    id: string
  }
  
  type SideBarProps = {
    icon: React.ReactNode
  } & FieldProps
  
  export const SIDEBAR_MENU: SideBarProps[] = [
    {
      id: uuid(),
      label: 'home',
      icon: <House />,
    },
    {
      id: uuid(),
      label: 'automations',
      icon: <Activity />,
    },
    {
      id: uuid(),
      label: 'integrations',
      icon: <Plug />,
    },
    {
      id: uuid(),
      label: 'settings',
      icon: <Settings />,
    },
  ]