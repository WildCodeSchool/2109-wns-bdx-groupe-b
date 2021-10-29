"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = exports.Status = void 0;
var typeorm_1 = require("typeorm");
var Status;
(function (Status) {
    Status["TODO"] = "todo";
    Status["IN_PROGRESS"] = "in_progress";
    Status["DONE"] = "done";
})(Status = exports.Status || (exports.Status = {}));
var Project = /** @class */ (function () {
    function Project() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Project.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Project.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "text" }),
        __metadata("design:type", String)
    ], Project.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "enum",
            enum: Status,
            default: Status.TODO
        }),
        __metadata("design:type", String)
    ], Project.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "date" }),
        __metadata("design:type", String)
    ], Project.prototype, "dueDate", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Project.prototype, "thumbnailPath", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Project.prototype, "initialTimeSpent", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Project.prototype, "totalTimeSpent", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Project.prototype, "percentageTimeSpent", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Project.prototype, "percentageTimeAccompished", void 0);
    Project = __decorate([
        (0, typeorm_1.Entity)()
    ], Project);
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=Project.js.map