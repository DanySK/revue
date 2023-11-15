// @generated by protobuf-ts 2.9.1 with parameter optimize_code_size,long_type_string
// @generated from protobuf file "anomaly.proto" (package "anomaly", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message anomaly.Anomaly
 */
export interface Anomaly {
    /**
     * @generated from protobuf field: int32 anomalyId = 1;
     */
    anomalyId: number;
    /**
     * @generated from protobuf field: string timestamp = 2;
     */
    timestamp: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class Anomaly$Type extends MessageType<Anomaly> {
    constructor() {
        super("anomaly.Anomaly", [
            { no: 1, name: "anomalyId", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "timestamp", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message anomaly.Anomaly
 */
export const Anomaly = new Anomaly$Type();
