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
import { IRatingFields } from '@utils/types/monster.type'

/**
 * Rating fields configuration for the monster attributes with icons, colors, and tooltips.
 */
export const RatingFields: IRatingFields[] = [
  {
    id: 'attack',
    label: 'Dano do Ataque',
    icon: <LocalFireDepartment fontSize="inherit" />,
    emptyIcon: <LocalFireDepartmentOutlined fontSize="inherit" />,
    color: '#FF5722',
    colorHover: '#FF572290',
    article: 'o',
  },
  {
    id: 'defense',
    label: 'Defesa',
    icon: <LocalPolice fontSize="inherit" />,
    emptyIcon: <ShieldOutlined fontSize="inherit" />,
    color: '#1E88E5',
    colorHover: '#1E88E590',
    article: 'a',
  },
  {
    id: 'speed',
    label: 'Velocidade',
    icon: <Rocket fontSize="inherit" />,
    emptyIcon: <RocketOutlined fontSize="inherit" />,
    color: '#57B169',
    colorHover: '#57B16990',
    article: 'a',
  },
  {
    id: 'hp',
    label: 'HP',
    icon: <Favorite fontSize="inherit" />,
    emptyIcon: <FavoriteOutlined fontSize="inherit" />,
    color: '#FF2D2E',
    colorHover: '#ff2d2d90',
    article: 'o',
  },
]
