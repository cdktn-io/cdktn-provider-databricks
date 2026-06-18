# `registeredModel` Submodule <a name="`registeredModel` Submodule" id="@cdktn/provider-databricks.registeredModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RegisteredModel <a name="RegisteredModel" id="@cdktn/provider-databricks.registeredModel.RegisteredModel"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model databricks_registered_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer"></a>

```typescript
import { registeredModel } from '@cdktn/provider-databricks'

new registeredModel.RegisteredModel(scope: Construct, id: string, config?: RegisteredModelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig">RegisteredModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig">RegisteredModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.putAliases">putAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetAliases">resetAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetBrowseOnly">resetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetFullName">resetFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetStorageLocation">resetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetUpdatedBy">resetUpdatedBy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAliases` <a name="putAliases" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.putAliases"></a>

```typescript
public putAliases(value: IResolvable | RegisteredModelAliases[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.putAliases.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>[]

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.putProviderConfig"></a>

```typescript
public putProviderConfig(value: RegisteredModelProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig">RegisteredModelProviderConfig</a>

---

##### `resetAliases` <a name="resetAliases" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetAliases"></a>

```typescript
public resetAliases(): void
```

##### `resetBrowseOnly` <a name="resetBrowseOnly" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetBrowseOnly"></a>

```typescript
public resetBrowseOnly(): void
```

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetCreatedAt"></a>

```typescript
public resetCreatedAt(): void
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetCreatedBy"></a>

```typescript
public resetCreatedBy(): void
```

##### `resetFullName` <a name="resetFullName" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetFullName"></a>

```typescript
public resetFullName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetMetastoreId"></a>

```typescript
public resetMetastoreId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

##### `resetStorageLocation` <a name="resetStorageLocation" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetStorageLocation"></a>

```typescript
public resetStorageLocation(): void
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetUpdatedAt"></a>

```typescript
public resetUpdatedAt(): void
```

##### `resetUpdatedBy` <a name="resetUpdatedBy" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetUpdatedBy"></a>

```typescript
public resetUpdatedBy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RegisteredModel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.isConstruct"></a>

```typescript
import { registeredModel } from '@cdktn/provider-databricks'

registeredModel.RegisteredModel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.isTerraformElement"></a>

```typescript
import { registeredModel } from '@cdktn/provider-databricks'

registeredModel.RegisteredModel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.isTerraformResource"></a>

```typescript
import { registeredModel } from '@cdktn/provider-databricks'

registeredModel.RegisteredModel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport"></a>

```typescript
import { registeredModel } from '@cdktn/provider-databricks'

registeredModel.RegisteredModel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RegisteredModel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RegisteredModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RegisteredModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RegisteredModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.aliases">aliases</a></code> | <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList">RegisteredModelAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference">RegisteredModelProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.aliasesInput">aliasesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.browseOnlyInput">browseOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.createdAtInput">createdAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.createdByInput">createdByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.metastoreIdInput">metastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig">RegisteredModelProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.storageLocationInput">storageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.updatedAtInput">updatedAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.updatedByInput">updatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.browseOnly">browseOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.storageLocation">storageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.aliases"></a>

```typescript
public readonly aliases: RegisteredModelAliasesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList">RegisteredModelAliasesList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.providerConfig"></a>

```typescript
public readonly providerConfig: RegisteredModelProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference">RegisteredModelProviderConfigOutputReference</a>

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.aliasesInput"></a>

```typescript
public readonly aliasesInput: IResolvable | RegisteredModelAliases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>[]

---

##### `browseOnlyInput`<sup>Optional</sup> <a name="browseOnlyInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.browseOnlyInput"></a>

```typescript
public readonly browseOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.createdAtInput"></a>

```typescript
public readonly createdAtInput: number;
```

- *Type:* number

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.createdByInput"></a>

```typescript
public readonly createdByInput: string;
```

- *Type:* string

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.metastoreIdInput"></a>

```typescript
public readonly metastoreIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: RegisteredModelProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig">RegisteredModelProviderConfig</a>

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.storageLocationInput"></a>

```typescript
public readonly storageLocationInput: string;
```

- *Type:* string

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.updatedAtInput"></a>

```typescript
public readonly updatedAtInput: number;
```

- *Type:* number

---

##### `updatedByInput`<sup>Optional</sup> <a name="updatedByInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.updatedByInput"></a>

```typescript
public readonly updatedByInput: string;
```

- *Type:* string

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.browseOnly"></a>

```typescript
public readonly browseOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RegisteredModelAliases <a name="RegisteredModelAliases" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.Initializer"></a>

```typescript
import { registeredModel } from '@cdktn/provider-databricks'

const registeredModelAliases: registeredModel.RegisteredModelAliases = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.aliasName">aliasName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#alias_name RegisteredModel#alias_name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#catalog_name RegisteredModel#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#id RegisteredModel#id}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.modelName">modelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#model_name RegisteredModel#model_name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#schema_name RegisteredModel#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.versionNum">versionNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#version_num RegisteredModel#version_num}. |

---

##### `aliasName`<sup>Optional</sup> <a name="aliasName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#alias_name RegisteredModel#alias_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#catalog_name RegisteredModel#catalog_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#id RegisteredModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `modelName`<sup>Optional</sup> <a name="modelName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#model_name RegisteredModel#model_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#schema_name RegisteredModel#schema_name}.

---

##### `versionNum`<sup>Optional</sup> <a name="versionNum" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.versionNum"></a>

```typescript
public readonly versionNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#version_num RegisteredModel#version_num}.

---

### RegisteredModelConfig <a name="RegisteredModelConfig" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.Initializer"></a>

```typescript
import { registeredModel } from '@cdktn/provider-databricks'

const registeredModelConfig: registeredModel.RegisteredModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.aliases">aliases</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>[]</code> | aliases block. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.browseOnly">browseOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#browse_only RegisteredModel#browse_only}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#catalog_name RegisteredModel#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#comment RegisteredModel#comment}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.createdAt">createdAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#created_at RegisteredModel#created_at}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.createdBy">createdBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#created_by RegisteredModel#created_by}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#full_name RegisteredModel#full_name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#id RegisteredModel#id}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.metastoreId">metastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#metastore_id RegisteredModel#metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#name RegisteredModel#name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#owner RegisteredModel#owner}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig">RegisteredModelProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#schema_name RegisteredModel#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.storageLocation">storageLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#storage_location RegisteredModel#storage_location}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.updatedAt">updatedAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#updated_at RegisteredModel#updated_at}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.updatedBy">updatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#updated_by RegisteredModel#updated_by}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.aliases"></a>

```typescript
public readonly aliases: IResolvable | RegisteredModelAliases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>[]

aliases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#aliases RegisteredModel#aliases}

---

##### `browseOnly`<sup>Optional</sup> <a name="browseOnly" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.browseOnly"></a>

```typescript
public readonly browseOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#browse_only RegisteredModel#browse_only}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#catalog_name RegisteredModel#catalog_name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#comment RegisteredModel#comment}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#created_at RegisteredModel#created_at}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#created_by RegisteredModel#created_by}.

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#full_name RegisteredModel#full_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#id RegisteredModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#metastore_id RegisteredModel#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#name RegisteredModel#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#owner RegisteredModel#owner}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: RegisteredModelProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig">RegisteredModelProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#provider_config RegisteredModel#provider_config}

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#schema_name RegisteredModel#schema_name}.

---

##### `storageLocation`<sup>Optional</sup> <a name="storageLocation" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#storage_location RegisteredModel#storage_location}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#updated_at RegisteredModel#updated_at}.

---

##### `updatedBy`<sup>Optional</sup> <a name="updatedBy" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#updated_by RegisteredModel#updated_by}.

---

### RegisteredModelProviderConfig <a name="RegisteredModelProviderConfig" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig.Initializer"></a>

```typescript
import { registeredModel } from '@cdktn/provider-databricks'

const registeredModelProviderConfig: registeredModel.RegisteredModelProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#workspace_id RegisteredModel#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/registered_model#workspace_id RegisteredModel#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### RegisteredModelAliasesList <a name="RegisteredModelAliasesList" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer"></a>

```typescript
import { registeredModel } from '@cdktn/provider-databricks'

new registeredModel.RegisteredModelAliasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.get"></a>

```typescript
public get(index: number): RegisteredModelAliasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RegisteredModelAliases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>[]

---


### RegisteredModelAliasesOutputReference <a name="RegisteredModelAliasesOutputReference" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer"></a>

```typescript
import { registeredModel } from '@cdktn/provider-databricks'

new registeredModel.RegisteredModelAliasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetAliasName">resetAliasName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetModelName">resetModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetVersionNum">resetVersionNum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAliasName` <a name="resetAliasName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetAliasName"></a>

```typescript
public resetAliasName(): void
```

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetModelName` <a name="resetModelName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetModelName"></a>

```typescript
public resetModelName(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

##### `resetVersionNum` <a name="resetVersionNum" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetVersionNum"></a>

```typescript
public resetVersionNum(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.aliasNameInput">aliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.modelNameInput">modelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.versionNumInput">versionNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.aliasName">aliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.versionNum">versionNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasNameInput`<sup>Optional</sup> <a name="aliasNameInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.aliasNameInput"></a>

```typescript
public readonly aliasNameInput: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.modelNameInput"></a>

```typescript
public readonly modelNameInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `versionNumInput`<sup>Optional</sup> <a name="versionNumInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.versionNumInput"></a>

```typescript
public readonly versionNumInput: number;
```

- *Type:* number

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `versionNum`<sup>Required</sup> <a name="versionNum" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.versionNum"></a>

```typescript
public readonly versionNum: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RegisteredModelAliases;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>

---


### RegisteredModelProviderConfigOutputReference <a name="RegisteredModelProviderConfigOutputReference" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.Initializer"></a>

```typescript
import { registeredModel } from '@cdktn/provider-databricks'

new registeredModel.RegisteredModelProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig">RegisteredModelProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RegisteredModelProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig">RegisteredModelProviderConfig</a>

---



