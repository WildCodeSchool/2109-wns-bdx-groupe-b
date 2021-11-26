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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var type_graphql_1 = require("type-graphql");
var Project_1 = __importDefault(require("../../models/Project"));
var CreateProjectInput_1 = __importDefault(require("./CreateProjectInput"));
var DeleteProjectInput_1 = __importDefault(require("./DeleteProjectInput"));
var UpdateProjectInput_1 = __importDefault(require("./UpdateProjectInput"));
var ProjectResolver = /** @class */ (function () {
    function ProjectResolver() {
    }
    ProjectResolver.prototype.project = function () {
        return __awaiter(this, void 0, void 0, function () {
            var projects;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Project_1.default.find()];
                    case 1:
                        projects = _a.sent();
                        return [2 /*return*/, projects];
                }
            });
        });
    };
    ProjectResolver.prototype.CreateProject = function (_a) {
        var name = _a.name, description = _a.description, status = _a.status, dueDate = _a.dueDate, initialTimeSpent = _a.initialTimeSpent, totalTimeSpent = _a.totalTimeSpent, percentageTimeAccomplished = _a.percentageTimeAccomplished;
        return __awaiter(this, void 0, void 0, function () {
            var projectToBeCreated, newProject;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        projectToBeCreated = new Project_1.default();
                        projectToBeCreated.name = name;
                        projectToBeCreated.description = description;
                        projectToBeCreated.status = status;
                        projectToBeCreated.dueDate = dueDate;
                        projectToBeCreated.initialTimeSpent = initialTimeSpent;
                        projectToBeCreated.totalTimeSpent = totalTimeSpent;
                        projectToBeCreated.percentageTimeAccomplished = percentageTimeAccomplished;
                        return [4 /*yield*/, projectToBeCreated.save()];
                    case 1:
                        newProject = _b.sent();
                        return [2 /*return*/, Project_1.default.findOne({ id: newProject.id })];
                }
            });
        });
    };
    ProjectResolver.prototype.deleteProject = function (_a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var project;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Project_1.default.findOneOrFail({ id: id })];
                    case 1:
                        project = _b.sent();
                        return [4 /*yield*/, Project_1.default.remove(project)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, project];
                }
            });
        });
    };
    ProjectResolver.prototype.UpdateProject = function (_a) {
        var id = _a.id, name = _a.name, description = _a.description, status = _a.status, dueDate = _a.dueDate, initialTimeSpent = _a.initialTimeSpent, totalTimeSpent = _a.totalTimeSpent, percentageTimeAccomplished = _a.percentageTimeAccomplished;
        return __awaiter(this, void 0, void 0, function () {
            var project, updateProject;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Project_1.default.findOneOrFail({ id: id })];
                    case 1:
                        project = _b.sent();
                        return [4 /*yield*/, Project_1.default.update(project, { name: name, description: description, status: status, dueDate: dueDate, initialTimeSpent: initialTimeSpent, totalTimeSpent: totalTimeSpent, percentageTimeAccomplished: percentageTimeAccomplished })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, Project_1.default.findOne({ id: id })];
                    case 3:
                        updateProject = _b.sent();
                        return [2 /*return*/, updateProject];
                }
            });
        });
    };
    __decorate([
        (0, type_graphql_1.Query)(function () { return [Project_1.default]; }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ProjectResolver.prototype, "project", null);
    __decorate([
        (0, type_graphql_1.Mutation)(function () { return Project_1.default; }),
        __param(0, (0, type_graphql_1.Args)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [CreateProjectInput_1.default]),
        __metadata("design:returntype", Promise)
    ], ProjectResolver.prototype, "CreateProject", null);
    __decorate([
        (0, type_graphql_1.Mutation)(function () { return Project_1.default; }),
        __param(0, (0, type_graphql_1.Args)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DeleteProjectInput_1.default]),
        __metadata("design:returntype", Promise)
    ], ProjectResolver.prototype, "deleteProject", null);
    __decorate([
        (0, type_graphql_1.Mutation)(function () { return Project_1.default; }),
        __param(0, (0, type_graphql_1.Args)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [UpdateProjectInput_1.default]),
        __metadata("design:returntype", Promise)
    ], ProjectResolver.prototype, "UpdateProject", null);
    ProjectResolver = __decorate([
        (0, type_graphql_1.Resolver)(Project_1.default)
    ], ProjectResolver);
    return ProjectResolver;
}());
exports.default = ProjectResolver;
//# sourceMappingURL=ProjectResolver.js.map