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
exports.Task = exports.Status = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var File_1 = require("./File");
var Comment_1 = require("./Comment");
var Time_1 = require("./Time");
var Job_1 = require("./Job");
var Status;
(function (Status) {
    Status["TODO"] = "todo";
    Status["IN_PROGRESS"] = "in_progress";
    Status["DONE"] = "done";
})(Status = exports.Status || (exports.Status = {}));
var Task = /** @class */ (function () {
    function Task() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Task.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Task.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "text" }),
        __metadata("design:type", String)
    ], Task.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "enum",
            enum: Status,
            default: Status.TODO
        }),
        __metadata("design:type", String)
    ], Task.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Task.prototype, "initialTimeSpent", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Task.prototype, "percentageTimeAccompished", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return User_1.User; }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], Task.prototype, "users", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return Job_1.Job; }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], Task.prototype, "jobs", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return File_1.File; }, function (files) { return files.task; }),
        __metadata("design:type", Array)
    ], Task.prototype, "files", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Comment_1.Comment; }, function (comments) { return comments.task; }),
        __metadata("design:type", Array)
    ], Task.prototype, "comments", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Time_1.Time; }, function (times) { return times.task; }),
        __metadata("design:type", Array)
    ], Task.prototype, "times", void 0);
    Task = __decorate([
        (0, typeorm_1.Entity)()
    ], Task);
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=Task.js.map