# `agentKitManagedMemoryEntry` Submodule <a name="`agentKitManagedMemoryEntry` Submodule" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentKitManagedMemoryEntry <a name="AgentKitManagedMemoryEntry" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry databricks_agent_kit_managed_memory_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer"></a>

```typescript
import { agentKitManagedMemoryEntry } from '@cdktn/provider-databricks'

new agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry(scope: Construct, id: string, config: AgentKitManagedMemoryEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig">AgentKitManagedMemoryEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig">AgentKitManagedMemoryEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetManagedMemoryEntryId">resetManagedMemoryEntryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetSessionId">resetSessionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetSourceType">resetSourceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.putProviderConfig"></a>

```typescript
public putProviderConfig(value: AgentKitManagedMemoryEntryProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a>

---

##### `resetContent` <a name="resetContent" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetManagedMemoryEntryId` <a name="resetManagedMemoryEntryId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetManagedMemoryEntryId"></a>

```typescript
public resetManagedMemoryEntryId(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSessionId` <a name="resetSessionId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetSessionId"></a>

```typescript
public resetSessionId(): void
```

##### `resetSourceType` <a name="resetSourceType" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetSourceType"></a>

```typescript
public resetSourceType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AgentKitManagedMemoryEntry resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isConstruct"></a>

```typescript
import { agentKitManagedMemoryEntry } from '@cdktn/provider-databricks'

agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformElement"></a>

```typescript
import { agentKitManagedMemoryEntry } from '@cdktn/provider-databricks'

agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformResource"></a>

```typescript
import { agentKitManagedMemoryEntry } from '@cdktn/provider-databricks'

agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport"></a>

```typescript
import { agentKitManagedMemoryEntry } from '@cdktn/provider-databricks'

agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AgentKitManagedMemoryEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AgentKitManagedMemoryEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AgentKitManagedMemoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AgentKitManagedMemoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference">AgentKitManagedMemoryEntryProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.actorIdInput">actorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.managedMemoryEntryIdInput">managedMemoryEntryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sessionIdInput">sessionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.actorId">actorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.managedMemoryEntryId">managedMemoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sessionId">sessionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.providerConfig"></a>

```typescript
public readonly providerConfig: AgentKitManagedMemoryEntryProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference">AgentKitManagedMemoryEntryProviderConfigOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `actorIdInput`<sup>Optional</sup> <a name="actorIdInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.actorIdInput"></a>

```typescript
public readonly actorIdInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `managedMemoryEntryIdInput`<sup>Optional</sup> <a name="managedMemoryEntryIdInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.managedMemoryEntryIdInput"></a>

```typescript
public readonly managedMemoryEntryIdInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | AgentKitManagedMemoryEntryProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a>

---

##### `sessionIdInput`<sup>Optional</sup> <a name="sessionIdInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sessionIdInput"></a>

```typescript
public readonly sessionIdInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.actorId"></a>

```typescript
public readonly actorId: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `managedMemoryEntryId`<sup>Required</sup> <a name="managedMemoryEntryId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.managedMemoryEntryId"></a>

```typescript
public readonly managedMemoryEntryId: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentKitManagedMemoryEntryConfig <a name="AgentKitManagedMemoryEntryConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.Initializer"></a>

```typescript
import { agentKitManagedMemoryEntry } from '@cdktn/provider-databricks'

const agentKitManagedMemoryEntryConfig: agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.actorId">actorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#actor_id AgentKitManagedMemoryEntry#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#parent AgentKitManagedMemoryEntry#parent}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#path AgentKitManagedMemoryEntry#path}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#content AgentKitManagedMemoryEntry#content}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#description AgentKitManagedMemoryEntry#description}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.managedMemoryEntryId">managedMemoryEntryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#managed_memory_entry_id AgentKitManagedMemoryEntry#managed_memory_entry_id}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#provider_config AgentKitManagedMemoryEntry#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.sessionId">sessionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#session_id AgentKitManagedMemoryEntry#session_id}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#source_type AgentKitManagedMemoryEntry#source_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.actorId"></a>

```typescript
public readonly actorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#actor_id AgentKitManagedMemoryEntry#actor_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#parent AgentKitManagedMemoryEntry#parent}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#path AgentKitManagedMemoryEntry#path}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#content AgentKitManagedMemoryEntry#content}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#description AgentKitManagedMemoryEntry#description}.

---

##### `managedMemoryEntryId`<sup>Optional</sup> <a name="managedMemoryEntryId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.managedMemoryEntryId"></a>

```typescript
public readonly managedMemoryEntryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#managed_memory_entry_id AgentKitManagedMemoryEntry#managed_memory_entry_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: AgentKitManagedMemoryEntryProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#provider_config AgentKitManagedMemoryEntry#provider_config}.

---

##### `sessionId`<sup>Optional</sup> <a name="sessionId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#session_id AgentKitManagedMemoryEntry#session_id}.

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#source_type AgentKitManagedMemoryEntry#source_type}.

---

### AgentKitManagedMemoryEntryProviderConfig <a name="AgentKitManagedMemoryEntryProviderConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig.Initializer"></a>

```typescript
import { agentKitManagedMemoryEntry } from '@cdktn/provider-databricks'

const agentKitManagedMemoryEntryProviderConfig: agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#workspace_id AgentKitManagedMemoryEntry#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#workspace_id AgentKitManagedMemoryEntry#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AgentKitManagedMemoryEntryProviderConfigOutputReference <a name="AgentKitManagedMemoryEntryProviderConfigOutputReference" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer"></a>

```typescript
import { agentKitManagedMemoryEntry } from '@cdktn/provider-databricks'

new agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AgentKitManagedMemoryEntryProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a>

---



