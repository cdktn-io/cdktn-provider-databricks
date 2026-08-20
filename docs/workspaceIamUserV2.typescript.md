# `workspaceIamUserV2` Submodule <a name="`workspaceIamUserV2` Submodule" id="@cdktn/provider-databricks.workspaceIamUserV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceIamUserV2 <a name="WorkspaceIamUserV2" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2 databricks_workspace_iam_user_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer"></a>

```typescript
import { workspaceIamUserV2 } from '@cdktn/provider-databricks'

new workspaceIamUserV2.WorkspaceIamUserV2(scope: Construct, id: string, config: WorkspaceIamUserV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config">WorkspaceIamUserV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config">WorkspaceIamUserV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.putFullName">putFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFullName` <a name="putFullName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.putFullName"></a>

```typescript
public putFullName(value: WorkspaceIamUserV2FullName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.putFullName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName">WorkspaceIamUserV2FullName</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.putProviderConfig"></a>

```typescript
public putProviderConfig(value: WorkspaceIamUserV2ProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig">WorkspaceIamUserV2ProviderConfig</a>

---

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspaceIamUserV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isConstruct"></a>

```typescript
import { workspaceIamUserV2 } from '@cdktn/provider-databricks'

workspaceIamUserV2.WorkspaceIamUserV2.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isTerraformElement"></a>

```typescript
import { workspaceIamUserV2 } from '@cdktn/provider-databricks'

workspaceIamUserV2.WorkspaceIamUserV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isTerraformResource"></a>

```typescript
import { workspaceIamUserV2 } from '@cdktn/provider-databricks'

workspaceIamUserV2.WorkspaceIamUserV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.generateConfigForImport"></a>

```typescript
import { workspaceIamUserV2 } from '@cdktn/provider-databricks'

workspaceIamUserV2.WorkspaceIamUserV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WorkspaceIamUserV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceIamUserV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceIamUserV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceIamUserV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.fullName">fullName</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference">WorkspaceIamUserV2FullNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference">WorkspaceIamUserV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.accountUserStatusInput">accountUserStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.fullNameInput">fullNameInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName">WorkspaceIamUserV2FullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig">WorkspaceIamUserV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.accountUserStatus">accountUserStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.fullName"></a>

```typescript
public readonly fullName: WorkspaceIamUserV2FullNameOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference">WorkspaceIamUserV2FullNameOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.providerConfig"></a>

```typescript
public readonly providerConfig: WorkspaceIamUserV2ProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference">WorkspaceIamUserV2ProviderConfigOutputReference</a>

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `accountUserStatusInput`<sup>Optional</sup> <a name="accountUserStatusInput" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.accountUserStatusInput"></a>

```typescript
public readonly accountUserStatusInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: IResolvable | WorkspaceIamUserV2FullName;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName">WorkspaceIamUserV2FullName</a>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | WorkspaceIamUserV2ProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig">WorkspaceIamUserV2ProviderConfig</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `accountUserStatus`<sup>Required</sup> <a name="accountUserStatus" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.accountUserStatus"></a>

```typescript
public readonly accountUserStatus: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceIamUserV2Config <a name="WorkspaceIamUserV2Config" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.Initializer"></a>

```typescript
import { workspaceIamUserV2 } from '@cdktn/provider-databricks'

const workspaceIamUserV2Config: workspaceIamUserV2.WorkspaceIamUserV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.accountUserStatus">accountUserStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2#account_user_status WorkspaceIamUserV2#account_user_status}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.fullName">fullName</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName">WorkspaceIamUserV2FullName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2#full_name WorkspaceIamUserV2#full_name}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2#username WorkspaceIamUserV2#username}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2#external_id WorkspaceIamUserV2#external_id}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig">WorkspaceIamUserV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2#provider_config WorkspaceIamUserV2#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountUserStatus`<sup>Required</sup> <a name="accountUserStatus" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.accountUserStatus"></a>

```typescript
public readonly accountUserStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2#account_user_status WorkspaceIamUserV2#account_user_status}.

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.fullName"></a>

```typescript
public readonly fullName: WorkspaceIamUserV2FullName;
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName">WorkspaceIamUserV2FullName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2#full_name WorkspaceIamUserV2#full_name}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2#username WorkspaceIamUserV2#username}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2#external_id WorkspaceIamUserV2#external_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.providerConfig"></a>

```typescript
public readonly providerConfig: WorkspaceIamUserV2ProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig">WorkspaceIamUserV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2#provider_config WorkspaceIamUserV2#provider_config}.

---

### WorkspaceIamUserV2FullName <a name="WorkspaceIamUserV2FullName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName.Initializer"></a>

```typescript
import { workspaceIamUserV2 } from '@cdktn/provider-databricks'

const workspaceIamUserV2FullName: workspaceIamUserV2.WorkspaceIamUserV2FullName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName.property.familyName">familyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2#family_name WorkspaceIamUserV2#family_name}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName.property.givenName">givenName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2#given_name WorkspaceIamUserV2#given_name}. |

---

##### `familyName`<sup>Optional</sup> <a name="familyName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName.property.familyName"></a>

```typescript
public readonly familyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2#family_name WorkspaceIamUserV2#family_name}.

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2#given_name WorkspaceIamUserV2#given_name}.

---

### WorkspaceIamUserV2ProviderConfig <a name="WorkspaceIamUserV2ProviderConfig" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig.Initializer"></a>

```typescript
import { workspaceIamUserV2 } from '@cdktn/provider-databricks'

const workspaceIamUserV2ProviderConfig: workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2#workspace_id WorkspaceIamUserV2#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_user_v2#workspace_id WorkspaceIamUserV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceIamUserV2FullNameOutputReference <a name="WorkspaceIamUserV2FullNameOutputReference" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.Initializer"></a>

```typescript
import { workspaceIamUserV2 } from '@cdktn/provider-databricks'

new workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.resetFamilyName">resetFamilyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.resetGivenName">resetGivenName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFamilyName` <a name="resetFamilyName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.resetFamilyName"></a>

```typescript
public resetFamilyName(): void
```

##### `resetGivenName` <a name="resetGivenName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.resetGivenName"></a>

```typescript
public resetGivenName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.familyNameInput">familyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.givenNameInput">givenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.familyName">familyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName">WorkspaceIamUserV2FullName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `familyNameInput`<sup>Optional</sup> <a name="familyNameInput" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.familyNameInput"></a>

```typescript
public readonly familyNameInput: string;
```

- *Type:* string

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.givenNameInput"></a>

```typescript
public readonly givenNameInput: string;
```

- *Type:* string

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.familyName"></a>

```typescript
public readonly familyName: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceIamUserV2FullName;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName">WorkspaceIamUserV2FullName</a>

---


### WorkspaceIamUserV2ProviderConfigOutputReference <a name="WorkspaceIamUserV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.Initializer"></a>

```typescript
import { workspaceIamUserV2 } from '@cdktn/provider-databricks'

new workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig">WorkspaceIamUserV2ProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceIamUserV2ProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig">WorkspaceIamUserV2ProviderConfig</a>

---



