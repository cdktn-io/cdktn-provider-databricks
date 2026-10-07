# `masonManagedMemoryEntry` Submodule <a name="`masonManagedMemoryEntry` Submodule" id="@cdktn/provider-databricks.masonManagedMemoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MasonManagedMemoryEntry <a name="MasonManagedMemoryEntry" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry databricks_mason_managed_memory_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer"></a>

```typescript
import { masonManagedMemoryEntry } from '@cdktn/provider-databricks'

new masonManagedMemoryEntry.MasonManagedMemoryEntry(scope: Construct, id: string, config: MasonManagedMemoryEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig">MasonManagedMemoryEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig">MasonManagedMemoryEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetManagedMemoryEntryId">resetManagedMemoryEntryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetSessionId">resetSessionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetSourceType">resetSourceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.putProviderConfig"></a>

```typescript
public putProviderConfig(value: MasonManagedMemoryEntryProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a>

---

##### `resetContent` <a name="resetContent" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetManagedMemoryEntryId` <a name="resetManagedMemoryEntryId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetManagedMemoryEntryId"></a>

```typescript
public resetManagedMemoryEntryId(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSessionId` <a name="resetSessionId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetSessionId"></a>

```typescript
public resetSessionId(): void
```

##### `resetSourceType` <a name="resetSourceType" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetSourceType"></a>

```typescript
public resetSourceType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MasonManagedMemoryEntry resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isConstruct"></a>

```typescript
import { masonManagedMemoryEntry } from '@cdktn/provider-databricks'

masonManagedMemoryEntry.MasonManagedMemoryEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformElement"></a>

```typescript
import { masonManagedMemoryEntry } from '@cdktn/provider-databricks'

masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformResource"></a>

```typescript
import { masonManagedMemoryEntry } from '@cdktn/provider-databricks'

masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport"></a>

```typescript
import { masonManagedMemoryEntry } from '@cdktn/provider-databricks'

masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MasonManagedMemoryEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MasonManagedMemoryEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MasonManagedMemoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MasonManagedMemoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference">MasonManagedMemoryEntryProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.actorIdInput">actorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.managedMemoryEntryIdInput">managedMemoryEntryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sessionIdInput">sessionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.actorId">actorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.managedMemoryEntryId">managedMemoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sessionId">sessionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.providerConfig"></a>

```typescript
public readonly providerConfig: MasonManagedMemoryEntryProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference">MasonManagedMemoryEntryProviderConfigOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `actorIdInput`<sup>Optional</sup> <a name="actorIdInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.actorIdInput"></a>

```typescript
public readonly actorIdInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `managedMemoryEntryIdInput`<sup>Optional</sup> <a name="managedMemoryEntryIdInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.managedMemoryEntryIdInput"></a>

```typescript
public readonly managedMemoryEntryIdInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | MasonManagedMemoryEntryProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a>

---

##### `sessionIdInput`<sup>Optional</sup> <a name="sessionIdInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sessionIdInput"></a>

```typescript
public readonly sessionIdInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.actorId"></a>

```typescript
public readonly actorId: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `managedMemoryEntryId`<sup>Required</sup> <a name="managedMemoryEntryId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.managedMemoryEntryId"></a>

```typescript
public readonly managedMemoryEntryId: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MasonManagedMemoryEntryConfig <a name="MasonManagedMemoryEntryConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.Initializer"></a>

```typescript
import { masonManagedMemoryEntry } from '@cdktn/provider-databricks'

const masonManagedMemoryEntryConfig: masonManagedMemoryEntry.MasonManagedMemoryEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.actorId">actorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#actor_id MasonManagedMemoryEntry#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#parent MasonManagedMemoryEntry#parent}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#path MasonManagedMemoryEntry#path}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#content MasonManagedMemoryEntry#content}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#description MasonManagedMemoryEntry#description}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.managedMemoryEntryId">managedMemoryEntryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#managed_memory_entry_id MasonManagedMemoryEntry#managed_memory_entry_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#provider_config MasonManagedMemoryEntry#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.sessionId">sessionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#session_id MasonManagedMemoryEntry#session_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#source_type MasonManagedMemoryEntry#source_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.actorId"></a>

```typescript
public readonly actorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#actor_id MasonManagedMemoryEntry#actor_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#parent MasonManagedMemoryEntry#parent}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#path MasonManagedMemoryEntry#path}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#content MasonManagedMemoryEntry#content}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#description MasonManagedMemoryEntry#description}.

---

##### `managedMemoryEntryId`<sup>Optional</sup> <a name="managedMemoryEntryId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.managedMemoryEntryId"></a>

```typescript
public readonly managedMemoryEntryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#managed_memory_entry_id MasonManagedMemoryEntry#managed_memory_entry_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: MasonManagedMemoryEntryProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#provider_config MasonManagedMemoryEntry#provider_config}.

---

##### `sessionId`<sup>Optional</sup> <a name="sessionId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#session_id MasonManagedMemoryEntry#session_id}.

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#source_type MasonManagedMemoryEntry#source_type}.

---

### MasonManagedMemoryEntryProviderConfig <a name="MasonManagedMemoryEntryProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig.Initializer"></a>

```typescript
import { masonManagedMemoryEntry } from '@cdktn/provider-databricks'

const masonManagedMemoryEntryProviderConfig: masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#workspace_id MasonManagedMemoryEntry#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#workspace_id MasonManagedMemoryEntry#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MasonManagedMemoryEntryProviderConfigOutputReference <a name="MasonManagedMemoryEntryProviderConfigOutputReference" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer"></a>

```typescript
import { masonManagedMemoryEntry } from '@cdktn/provider-databricks'

new masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MasonManagedMemoryEntryProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a>

---



