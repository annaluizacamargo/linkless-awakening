import {
  Favorite,
  FavoriteOutlined,
  LocalFireDepartment,
  LocalFireDepartmentOutlined,
  LocalPolice,
  Rocket,
  RocketOutlined,
  ShieldOutlined,
} from '@mui/icons-material'
import { IRatingFields } from '@utils/types/monster.types'

/**
 * Rating fields configuration for the monster attributes with icons, colors, and tooltips.
 */
export const RatingFields: IRatingFields[] = [
  {
    id: 'attack',
    label: 'Dano do Ataque',
    icon: <LocalFireDepartment fontSize="inherit" />,
    emptyIcon: <LocalFireDepartmentOutlined fontSize="inherit" />,
    color: 'var(--attack-color)',
    colorHover: 'var(--attack-color-hover)',
    article: 'o',
  },
  {
    id: 'defense',
    label: 'Defesa',
    icon: <LocalPolice fontSize="inherit" />,
    emptyIcon: <ShieldOutlined fontSize="inherit" />,
    color: 'var(--defense-color)',
    colorHover: 'var(--defense-color-hover)',
    article: 'a',
  },
  {
    id: 'speed',
    label: 'Velocidade',
    icon: <Rocket fontSize="inherit" />,
    emptyIcon: <RocketOutlined fontSize="inherit" />,

    color: 'var(--speed-color)',
    colorHover: 'var(--speed-color-hover)',
    article: 'a',
  },
  {
    id: 'hp',
    label: 'HP',
    icon: <Favorite fontSize="inherit" />,
    emptyIcon: <FavoriteOutlined fontSize="inherit" />,

    color: 'var(--hp-color)',
    colorHover: 'var(--hp-color-hover)',
    article: 'o',
  },
]
