import { rootNode } from '../constants/domNodes';
import { TodoNode } from '../components/TodoNode';

for (let count = 1; count <= 3; count += 1) {
  rootNode.appendChild(TodoNode());
}
