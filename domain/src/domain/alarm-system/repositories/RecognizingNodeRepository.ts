import { RecognizingNode } from '../core/RecognizingNode'

export interface RecognizingNodeRepository {
  getRecognizingNodes(): Promise<RecognizingNode[]>

  getRecognizingNodeById(recognizingNodeId: string): Promise<RecognizingNode>

  insertRecognizingNode(recognizingNode: RecognizingNode): Promise<void>

  updateRecognizingNode(recognizingNode: RecognizingNode): Promise<void>

  deleteRecognizingNode(recognizingNodeId: string): Promise<void>
}
