# `postgresBranch` Submodule <a name="`postgresBranch` Submodule" id="@cdktn/provider-databricks.postgresBranch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresBranch <a name="PostgresBranch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch databricks_postgres_branch}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer"></a>

```typescript
import { postgresBranch } from '@cdktn/provider-databricks'

new postgresBranch.PostgresBranch(scope: Construct, id: string, config: PostgresBranchConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig">PostgresBranchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig">PostgresBranchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetPurgeOnDelete">resetPurgeOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetReplaceExisting">resetReplaceExisting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putProviderConfig"></a>

```typescript
public putProviderConfig(value: PostgresBranchProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a>

---

##### `putSpec` <a name="putSpec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec"></a>

```typescript
public putSpec(value: PostgresBranchSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetPurgeOnDelete` <a name="resetPurgeOnDelete" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetPurgeOnDelete"></a>

```typescript
public resetPurgeOnDelete(): void
```

##### `resetReplaceExisting` <a name="resetReplaceExisting" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetReplaceExisting"></a>

```typescript
public resetReplaceExisting(): void
```

##### `resetSpec` <a name="resetSpec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetSpec"></a>

```typescript
public resetSpec(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresBranch resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isConstruct"></a>

```typescript
import { postgresBranch } from '@cdktn/provider-databricks'

postgresBranch.PostgresBranch.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformElement"></a>

```typescript
import { postgresBranch } from '@cdktn/provider-databricks'

postgresBranch.PostgresBranch.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformResource"></a>

```typescript
import { postgresBranch } from '@cdktn/provider-databricks'

postgresBranch.PostgresBranch.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport"></a>

```typescript
import { postgresBranch } from '@cdktn/provider-databricks'

postgresBranch.PostgresBranch.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PostgresBranch resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresBranch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresBranch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PostgresBranch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference">PostgresBranchProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference">PostgresBranchSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference">PostgresBranchStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.branchIdInput">branchIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.purgeOnDeleteInput">purgeOnDeleteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.replaceExistingInput">replaceExistingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.specInput">specInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.branchId">branchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.purgeOnDelete">purgeOnDelete</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.replaceExisting">replaceExisting</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.providerConfig"></a>

```typescript
public readonly providerConfig: PostgresBranchProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference">PostgresBranchProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.spec"></a>

```typescript
public readonly spec: PostgresBranchSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference">PostgresBranchSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.status"></a>

```typescript
public readonly status: PostgresBranchStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference">PostgresBranchStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `branchIdInput`<sup>Optional</sup> <a name="branchIdInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.branchIdInput"></a>

```typescript
public readonly branchIdInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | PostgresBranchProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a>

---

##### `purgeOnDeleteInput`<sup>Optional</sup> <a name="purgeOnDeleteInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.purgeOnDeleteInput"></a>

```typescript
public readonly purgeOnDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `replaceExistingInput`<sup>Optional</sup> <a name="replaceExistingInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.replaceExistingInput"></a>

```typescript
public readonly replaceExistingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.specInput"></a>

```typescript
public readonly specInput: IResolvable | PostgresBranchSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a>

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.branchId"></a>

```typescript
public readonly branchId: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `purgeOnDelete`<sup>Required</sup> <a name="purgeOnDelete" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.purgeOnDelete"></a>

```typescript
public readonly purgeOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `replaceExisting`<sup>Required</sup> <a name="replaceExisting" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.replaceExisting"></a>

```typescript
public readonly replaceExisting: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresBranchConfig <a name="PostgresBranchConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.Initializer"></a>

```typescript
import { postgresBranch } from '@cdktn/provider-databricks'

const postgresBranchConfig: postgresBranch.PostgresBranchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.branchId">branchId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#branch_id PostgresBranch#branch_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#parent PostgresBranch#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#provider_config PostgresBranch#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.purgeOnDelete">purgeOnDelete</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#purge_on_delete PostgresBranch#purge_on_delete}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.replaceExisting">replaceExisting</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#replace_existing PostgresBranch#replace_existing}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#spec PostgresBranch#spec}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.branchId"></a>

```typescript
public readonly branchId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#branch_id PostgresBranch#branch_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#parent PostgresBranch#parent}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: PostgresBranchProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#provider_config PostgresBranch#provider_config}.

---

##### `purgeOnDelete`<sup>Optional</sup> <a name="purgeOnDelete" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.purgeOnDelete"></a>

```typescript
public readonly purgeOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#purge_on_delete PostgresBranch#purge_on_delete}.

---

##### `replaceExisting`<sup>Optional</sup> <a name="replaceExisting" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.replaceExisting"></a>

```typescript
public readonly replaceExisting: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#replace_existing PostgresBranch#replace_existing}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.spec"></a>

```typescript
public readonly spec: PostgresBranchSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#spec PostgresBranch#spec}.

---

### PostgresBranchProviderConfig <a name="PostgresBranchProviderConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig.Initializer"></a>

```typescript
import { postgresBranch } from '@cdktn/provider-databricks'

const postgresBranchProviderConfig: postgresBranch.PostgresBranchProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#workspace_id PostgresBranch#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#workspace_id PostgresBranch#workspace_id}.

---

### PostgresBranchSpec <a name="PostgresBranchSpec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.Initializer"></a>

```typescript
import { postgresBranch } from '@cdktn/provider-databricks'

const postgresBranchSpec: postgresBranch.PostgresBranchSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.expireTime">expireTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#expire_time PostgresBranch#expire_time}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.isProtected">isProtected</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#is_protected PostgresBranch#is_protected}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.noExpiry">noExpiry</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#no_expiry PostgresBranch#no_expiry}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranch">sourceBranch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#source_branch PostgresBranch#source_branch}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranchLsn">sourceBranchLsn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#source_branch_lsn PostgresBranch#source_branch_lsn}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranchTime">sourceBranchTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#source_branch_time PostgresBranch#source_branch_time}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.ttl">ttl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#ttl PostgresBranch#ttl}. |

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#expire_time PostgresBranch#expire_time}.

---

##### `isProtected`<sup>Optional</sup> <a name="isProtected" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.isProtected"></a>

```typescript
public readonly isProtected: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#is_protected PostgresBranch#is_protected}.

---

##### `noExpiry`<sup>Optional</sup> <a name="noExpiry" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.noExpiry"></a>

```typescript
public readonly noExpiry: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#no_expiry PostgresBranch#no_expiry}.

---

##### `sourceBranch`<sup>Optional</sup> <a name="sourceBranch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranch"></a>

```typescript
public readonly sourceBranch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#source_branch PostgresBranch#source_branch}.

---

##### `sourceBranchLsn`<sup>Optional</sup> <a name="sourceBranchLsn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranchLsn"></a>

```typescript
public readonly sourceBranchLsn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#source_branch_lsn PostgresBranch#source_branch_lsn}.

---

##### `sourceBranchTime`<sup>Optional</sup> <a name="sourceBranchTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranchTime"></a>

```typescript
public readonly sourceBranchTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#source_branch_time PostgresBranch#source_branch_time}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/postgres_branch#ttl PostgresBranch#ttl}.

---

### PostgresBranchStatus <a name="PostgresBranchStatus" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatus.Initializer"></a>

```typescript
import { postgresBranch } from '@cdktn/provider-databricks'

const postgresBranchStatus: postgresBranch.PostgresBranchStatus = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### PostgresBranchProviderConfigOutputReference <a name="PostgresBranchProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer"></a>

```typescript
import { postgresBranch } from '@cdktn/provider-databricks'

new postgresBranch.PostgresBranchProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresBranchProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a>

---


### PostgresBranchSpecOutputReference <a name="PostgresBranchSpecOutputReference" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer"></a>

```typescript
import { postgresBranch } from '@cdktn/provider-databricks'

new postgresBranch.PostgresBranchSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetIsProtected">resetIsProtected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetNoExpiry">resetNoExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranch">resetSourceBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranchLsn">resetSourceBranchLsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranchTime">resetSourceBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetExpireTime"></a>

```typescript
public resetExpireTime(): void
```

##### `resetIsProtected` <a name="resetIsProtected" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetIsProtected"></a>

```typescript
public resetIsProtected(): void
```

##### `resetNoExpiry` <a name="resetNoExpiry" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetNoExpiry"></a>

```typescript
public resetNoExpiry(): void
```

##### `resetSourceBranch` <a name="resetSourceBranch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranch"></a>

```typescript
public resetSourceBranch(): void
```

##### `resetSourceBranchLsn` <a name="resetSourceBranchLsn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranchLsn"></a>

```typescript
public resetSourceBranchLsn(): void
```

##### `resetSourceBranchTime` <a name="resetSourceBranchTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranchTime"></a>

```typescript
public resetSourceBranchTime(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.expireTimeInput">expireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.isProtectedInput">isProtectedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.noExpiryInput">noExpiryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchInput">sourceBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchLsnInput">sourceBranchLsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchTimeInput">sourceBranchTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.isProtected">isProtected</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.noExpiry">noExpiry</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranch">sourceBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchLsn">sourceBranchLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchTime">sourceBranchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.expireTimeInput"></a>

```typescript
public readonly expireTimeInput: string;
```

- *Type:* string

---

##### `isProtectedInput`<sup>Optional</sup> <a name="isProtectedInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.isProtectedInput"></a>

```typescript
public readonly isProtectedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `noExpiryInput`<sup>Optional</sup> <a name="noExpiryInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.noExpiryInput"></a>

```typescript
public readonly noExpiryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sourceBranchInput`<sup>Optional</sup> <a name="sourceBranchInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchInput"></a>

```typescript
public readonly sourceBranchInput: string;
```

- *Type:* string

---

##### `sourceBranchLsnInput`<sup>Optional</sup> <a name="sourceBranchLsnInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchLsnInput"></a>

```typescript
public readonly sourceBranchLsnInput: string;
```

- *Type:* string

---

##### `sourceBranchTimeInput`<sup>Optional</sup> <a name="sourceBranchTimeInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchTimeInput"></a>

```typescript
public readonly sourceBranchTimeInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `isProtected`<sup>Required</sup> <a name="isProtected" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.isProtected"></a>

```typescript
public readonly isProtected: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `noExpiry`<sup>Required</sup> <a name="noExpiry" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.noExpiry"></a>

```typescript
public readonly noExpiry: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sourceBranch`<sup>Required</sup> <a name="sourceBranch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranch"></a>

```typescript
public readonly sourceBranch: string;
```

- *Type:* string

---

##### `sourceBranchLsn`<sup>Required</sup> <a name="sourceBranchLsn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchLsn"></a>

```typescript
public readonly sourceBranchLsn: string;
```

- *Type:* string

---

##### `sourceBranchTime`<sup>Required</sup> <a name="sourceBranchTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchTime"></a>

```typescript
public readonly sourceBranchTime: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresBranchSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a>

---


### PostgresBranchStatusOutputReference <a name="PostgresBranchStatusOutputReference" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer"></a>

```typescript
import { postgresBranch } from '@cdktn/provider-databricks'

new postgresBranch.PostgresBranchStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.branchId">branchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.currentState">currentState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.default">default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.isProtected">isProtected</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.logicalSizeBytes">logicalSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.pendingState">pendingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.purgeTime">purgeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranch">sourceBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranchLsn">sourceBranchLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranchTime">sourceBranchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.stateChangeTime">stateChangeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatus">PostgresBranchStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.branchId"></a>

```typescript
public readonly branchId: string;
```

- *Type:* string

---

##### `currentState`<sup>Required</sup> <a name="currentState" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.currentState"></a>

```typescript
public readonly currentState: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `isProtected`<sup>Required</sup> <a name="isProtected" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.isProtected"></a>

```typescript
public readonly isProtected: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `logicalSizeBytes`<sup>Required</sup> <a name="logicalSizeBytes" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.logicalSizeBytes"></a>

```typescript
public readonly logicalSizeBytes: number;
```

- *Type:* number

---

##### `pendingState`<sup>Required</sup> <a name="pendingState" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.pendingState"></a>

```typescript
public readonly pendingState: string;
```

- *Type:* string

---

##### `purgeTime`<sup>Required</sup> <a name="purgeTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.purgeTime"></a>

```typescript
public readonly purgeTime: string;
```

- *Type:* string

---

##### `sourceBranch`<sup>Required</sup> <a name="sourceBranch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranch"></a>

```typescript
public readonly sourceBranch: string;
```

- *Type:* string

---

##### `sourceBranchLsn`<sup>Required</sup> <a name="sourceBranchLsn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranchLsn"></a>

```typescript
public readonly sourceBranchLsn: string;
```

- *Type:* string

---

##### `sourceBranchTime`<sup>Required</sup> <a name="sourceBranchTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranchTime"></a>

```typescript
public readonly sourceBranchTime: string;
```

- *Type:* string

---

##### `stateChangeTime`<sup>Required</sup> <a name="stateChangeTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.stateChangeTime"></a>

```typescript
public readonly stateChangeTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresBranchStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatus">PostgresBranchStatus</a>

---



