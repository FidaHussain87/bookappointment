"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Type = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
// export type Role = 'user'  | 'admin';
var Type = /** @class */ (function () {
    // @Column()
    // @IsNumber()
    // duration?: Number;
    function Type(data) {
        if (data) {
            this.typeName = data.typeName;
        }
    }
    __decorate([
        (0, typeorm_1.ObjectIdColumn)()
    ], Type.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, class_validator_1.IsString)()
    ], Type.prototype, "typeName");
    Type = __decorate([
        (0, typeorm_1.Entity)()
    ], Type);
    return Type;
}());
exports.Type = Type;
