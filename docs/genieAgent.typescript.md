# `genieAgent` Submodule <a name="`genieAgent` Submodule" id="@cdktn/provider-databricks.genieAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenieAgent <a name="GenieAgent" id="@cdktn/provider-databricks.genieAgent.GenieAgent"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent databricks_genie_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgent(scope: Construct, id: string, config: GenieAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig">GenieAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig">GenieAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.putDefinition">putDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.resetGenieAgentId">resetGenieAgentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.resetParentPath">resetParentPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.genieAgent.GenieAgent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.genieAgent.GenieAgent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.genieAgent.GenieAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.genieAgent.GenieAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.genieAgent.GenieAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.genieAgent.GenieAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.genieAgent.GenieAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.genieAgent.GenieAgent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.genieAgent.GenieAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.genieAgent.GenieAgent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.genieAgent.GenieAgent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.genieAgent.GenieAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefinition` <a name="putDefinition" id="@cdktn/provider-databricks.genieAgent.GenieAgent.putDefinition"></a>

```typescript
public putDefinition(value: GenieAgentDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgent.putDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgent.putProviderConfig"></a>

```typescript
public putProviderConfig(value: GenieAgentProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgent.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.genieAgent.GenieAgent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGenieAgentId` <a name="resetGenieAgentId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.resetGenieAgentId"></a>

```typescript
public resetGenieAgentId(): void
```

##### `resetParentPath` <a name="resetParentPath" id="@cdktn/provider-databricks.genieAgent.GenieAgent.resetParentPath"></a>

```typescript
public resetParentPath(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgent.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GenieAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isConstruct"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

genieAgent.GenieAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformElement"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

genieAgent.GenieAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformResource"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

genieAgent.GenieAgent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

genieAgent.GenieAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GenieAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenieAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenieAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GenieAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference">GenieAgentDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.effectiveParentPath">effectiveParentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference">GenieAgentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.definitionInput">definitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.genieAgentIdInput">genieAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.parentPathInput">parentPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.warehouseIdInput">warehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.genieAgentId">genieAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.parentPath">parentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.definition"></a>

```typescript
public readonly definition: GenieAgentDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference">GenieAgentDefinitionOutputReference</a>

---

##### `effectiveParentPath`<sup>Required</sup> <a name="effectiveParentPath" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.effectiveParentPath"></a>

```typescript
public readonly effectiveParentPath: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.providerConfig"></a>

```typescript
public readonly providerConfig: GenieAgentProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference">GenieAgentProviderConfigOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.definitionInput"></a>

```typescript
public readonly definitionInput: IResolvable | GenieAgentDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `genieAgentIdInput`<sup>Optional</sup> <a name="genieAgentIdInput" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.genieAgentIdInput"></a>

```typescript
public readonly genieAgentIdInput: string;
```

- *Type:* string

---

##### `parentPathInput`<sup>Optional</sup> <a name="parentPathInput" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.parentPathInput"></a>

```typescript
public readonly parentPathInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | GenieAgentProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a>

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.warehouseIdInput"></a>

```typescript
public readonly warehouseIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `genieAgentId`<sup>Required</sup> <a name="genieAgentId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.genieAgentId"></a>

```typescript
public readonly genieAgentId: string;
```

- *Type:* string

---

##### `parentPath`<sup>Required</sup> <a name="parentPath" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.parentPath"></a>

```typescript
public readonly parentPath: string;
```

- *Type:* string

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenieAgentConfig <a name="GenieAgentConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentConfig: genieAgent.GenieAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#definition GenieAgent#definition}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.warehouseId">warehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#warehouse_id GenieAgent#warehouse_id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.genieAgentId">genieAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#genie_agent_id GenieAgent#genie_agent_id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.parentPath">parentPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#parent_path GenieAgent#parent_path}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#provider_config GenieAgent#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.definition"></a>

```typescript
public readonly definition: GenieAgentDefinition;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#definition GenieAgent#definition}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}.

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#warehouse_id GenieAgent#warehouse_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}.

---

##### `genieAgentId`<sup>Optional</sup> <a name="genieAgentId" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.genieAgentId"></a>

```typescript
public readonly genieAgentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#genie_agent_id GenieAgent#genie_agent_id}.

---

##### `parentPath`<sup>Optional</sup> <a name="parentPath" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.parentPath"></a>

```typescript
public readonly parentPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#parent_path GenieAgent#parent_path}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: GenieAgentProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#provider_config GenieAgent#provider_config}.

---

### GenieAgentDefinition <a name="GenieAgentDefinition" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinition: genieAgent.GenieAgentDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.benchmarks">benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#benchmarks GenieAgent#benchmarks}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#config GenieAgent#config}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#data_sources GenieAgent#data_sources}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.instructions">instructions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instructions GenieAgent#instructions}. |

---

##### `benchmarks`<sup>Optional</sup> <a name="benchmarks" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.benchmarks"></a>

```typescript
public readonly benchmarks: GenieAgentDefinitionBenchmarks;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#benchmarks GenieAgent#benchmarks}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.config"></a>

```typescript
public readonly config: GenieAgentDefinitionConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#config GenieAgent#config}.

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.dataSources"></a>

```typescript
public readonly dataSources: GenieAgentDefinitionDataSources;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#data_sources GenieAgent#data_sources}.

---

##### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.instructions"></a>

```typescript
public readonly instructions: GenieAgentDefinitionInstructions;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instructions GenieAgent#instructions}.

---

### GenieAgentDefinitionBenchmarks <a name="GenieAgentDefinitionBenchmarks" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionBenchmarks: genieAgent.GenieAgentDefinitionBenchmarks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks.property.questions">questions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#questions GenieAgent#questions}. |

---

##### `questions`<sup>Optional</sup> <a name="questions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks.property.questions"></a>

```typescript
public readonly questions: IResolvable | GenieAgentDefinitionBenchmarksQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#questions GenieAgent#questions}.

---

### GenieAgentDefinitionBenchmarksQuestions <a name="GenieAgentDefinitionBenchmarksQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionBenchmarksQuestions: genieAgent.GenieAgentDefinitionBenchmarksQuestions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.question">question</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.answer">answer</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#answer GenieAgent#answer}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.evaluationNote">evaluationNote</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#evaluation_note GenieAgent#evaluation_note}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}.

---

##### `answer`<sup>Optional</sup> <a name="answer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.answer"></a>

```typescript
public readonly answer: IResolvable | GenieAgentDefinitionBenchmarksQuestionsAnswer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#answer GenieAgent#answer}.

---

##### `evaluationNote`<sup>Optional</sup> <a name="evaluationNote" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.evaluationNote"></a>

```typescript
public readonly evaluationNote: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#evaluation_note GenieAgent#evaluation_note}.

---

### GenieAgentDefinitionBenchmarksQuestionsAnswer <a name="GenieAgentDefinitionBenchmarksQuestionsAnswer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionBenchmarksQuestionsAnswer: genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#content GenieAgent#content}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#format GenieAgent#format}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#content GenieAgent#content}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#format GenieAgent#format}.

---

### GenieAgentDefinitionConfig <a name="GenieAgentDefinitionConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionConfig: genieAgent.GenieAgentDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig.property.sampleQuestions">sampleQuestions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sample_questions GenieAgent#sample_questions}. |

---

##### `sampleQuestions`<sup>Optional</sup> <a name="sampleQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig.property.sampleQuestions"></a>

```typescript
public readonly sampleQuestions: IResolvable | GenieAgentDefinitionConfigSampleQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sample_questions GenieAgent#sample_questions}.

---

### GenieAgentDefinitionConfigSampleQuestions <a name="GenieAgentDefinitionConfigSampleQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionConfigSampleQuestions: genieAgent.GenieAgentDefinitionConfigSampleQuestions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions.property.question">question</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}.

---

### GenieAgentDefinitionDataSources <a name="GenieAgentDefinitionDataSources" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionDataSources: genieAgent.GenieAgentDefinitionDataSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.mcpConnections">mcpConnections</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#mcp_connections GenieAgent#mcp_connections}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.tables">tables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#tables GenieAgent#tables}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.volumes">volumes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#volumes GenieAgent#volumes}. |

---

##### `mcpConnections`<sup>Optional</sup> <a name="mcpConnections" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.mcpConnections"></a>

```typescript
public readonly mcpConnections: IResolvable | GenieAgentDefinitionDataSourcesMcpConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#mcp_connections GenieAgent#mcp_connections}.

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.tables"></a>

```typescript
public readonly tables: IResolvable | GenieAgentDefinitionDataSourcesTables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#tables GenieAgent#tables}.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.volumes"></a>

```typescript
public readonly volumes: IResolvable | GenieAgentDefinitionDataSourcesVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#volumes GenieAgent#volumes}.

---

### GenieAgentDefinitionDataSourcesMcpConnections <a name="GenieAgentDefinitionDataSourcesMcpConnections" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionDataSourcesMcpConnections: genieAgent.GenieAgentDefinitionDataSourcesMcpConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections.property.mcpConnection">mcpConnection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#mcp_connection GenieAgent#mcp_connection}. |

---

##### `mcpConnection`<sup>Required</sup> <a name="mcpConnection" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections.property.mcpConnection"></a>

```typescript
public readonly mcpConnection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#mcp_connection GenieAgent#mcp_connection}.

---

### GenieAgentDefinitionDataSourcesTables <a name="GenieAgentDefinitionDataSourcesTables" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionDataSourcesTables: genieAgent.GenieAgentDefinitionDataSourcesTables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.columnConfigs">columnConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#column_configs GenieAgent#column_configs}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}.

---

##### `columnConfigs`<sup>Optional</sup> <a name="columnConfigs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.columnConfigs"></a>

```typescript
public readonly columnConfigs: IResolvable | GenieAgentDefinitionDataSourcesTablesColumnConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#column_configs GenieAgent#column_configs}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}.

---

### GenieAgentDefinitionDataSourcesTablesColumnConfigs <a name="GenieAgentDefinitionDataSourcesTablesColumnConfigs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionDataSourcesTablesColumnConfigs: genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.column">column</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#column GenieAgent#column}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching">enableEntityMatching</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#enable_entity_matching GenieAgent#enable_entity_matching}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance">enableFormatAssistance</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#enable_format_assistance GenieAgent#enable_format_assistance}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.exclude">exclude</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#exclude GenieAgent#exclude}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.synonyms">synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#column GenieAgent#column}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}.

---

##### `enableEntityMatching`<sup>Optional</sup> <a name="enableEntityMatching" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching"></a>

```typescript
public readonly enableEntityMatching: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#enable_entity_matching GenieAgent#enable_entity_matching}.

---

##### `enableFormatAssistance`<sup>Optional</sup> <a name="enableFormatAssistance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance"></a>

```typescript
public readonly enableFormatAssistance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#enable_format_assistance GenieAgent#enable_format_assistance}.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.exclude"></a>

```typescript
public readonly exclude: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#exclude GenieAgent#exclude}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}.

---

### GenieAgentDefinitionDataSourcesVolumes <a name="GenieAgentDefinitionDataSourcesVolumes" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionDataSourcesVolumes: genieAgent.GenieAgentDefinitionDataSourcesVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#path GenieAgent#path}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#path GenieAgent#path}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}.

---

### GenieAgentDefinitionInstructions <a name="GenieAgentDefinitionInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionInstructions: genieAgent.GenieAgentDefinitionInstructions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.exampleQuestionSqls">exampleQuestionSqls</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#example_question_sqls GenieAgent#example_question_sqls}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.joinSpecs">joinSpecs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#join_specs GenieAgent#join_specs}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.sqlFunctions">sqlFunctions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql_functions GenieAgent#sql_functions}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.sqlSnippets">sqlSnippets</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql_snippets GenieAgent#sql_snippets}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.textInstructions">textInstructions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#text_instructions GenieAgent#text_instructions}. |

---

##### `exampleQuestionSqls`<sup>Optional</sup> <a name="exampleQuestionSqls" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.exampleQuestionSqls"></a>

```typescript
public readonly exampleQuestionSqls: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#example_question_sqls GenieAgent#example_question_sqls}.

---

##### `joinSpecs`<sup>Optional</sup> <a name="joinSpecs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.joinSpecs"></a>

```typescript
public readonly joinSpecs: IResolvable | GenieAgentDefinitionInstructionsJoinSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#join_specs GenieAgent#join_specs}.

---

##### `sqlFunctions`<sup>Optional</sup> <a name="sqlFunctions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.sqlFunctions"></a>

```typescript
public readonly sqlFunctions: IResolvable | GenieAgentDefinitionInstructionsSqlFunctions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql_functions GenieAgent#sql_functions}.

---

##### `sqlSnippets`<sup>Optional</sup> <a name="sqlSnippets" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.sqlSnippets"></a>

```typescript
public readonly sqlSnippets: GenieAgentDefinitionInstructionsSqlSnippets;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql_snippets GenieAgent#sql_snippets}.

---

##### `textInstructions`<sup>Optional</sup> <a name="textInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.textInstructions"></a>

```typescript
public readonly textInstructions: IResolvable | GenieAgentDefinitionInstructionsTextInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#text_instructions GenieAgent#text_instructions}.

---

### GenieAgentDefinitionInstructionsExampleQuestionSqls <a name="GenieAgentDefinitionInstructionsExampleQuestionSqls" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionInstructionsExampleQuestionSqls: genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.question">question</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#parameters GenieAgent#parameters}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.usageGuidance">usageGuidance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#usage_guidance GenieAgent#usage_guidance}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#parameters GenieAgent#parameters}.

---

##### `usageGuidance`<sup>Optional</sup> <a name="usageGuidance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.usageGuidance"></a>

```typescript
public readonly usageGuidance: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#usage_guidance GenieAgent#usage_guidance}.

---

### GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionInstructionsExampleQuestionSqlsParameters: genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#name GenieAgent#name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#default_value GenieAgent#default_value}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint">typeHint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#type_hint GenieAgent#type_hint}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#name GenieAgent#name}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue"></a>

```typescript
public readonly defaultValue: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#default_value GenieAgent#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}.

---

##### `typeHint`<sup>Optional</sup> <a name="typeHint" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint"></a>

```typescript
public readonly typeHint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#type_hint GenieAgent#type_hint}.

---

### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue: genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange">valueRange</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#value_range GenieAgent#value_range}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#values GenieAgent#values}. |

---

##### `valueRange`<sup>Optional</sup> <a name="valueRange" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange"></a>

```typescript
public readonly valueRange: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#value_range GenieAgent#value_range}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#values GenieAgent#values}.

---

### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange: genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max">max</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#max GenieAgent#max}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min">min</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#min GenieAgent#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max"></a>

```typescript
public readonly max: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#max GenieAgent#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min"></a>

```typescript
public readonly min: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#min GenieAgent#min}.

---

### GenieAgentDefinitionInstructionsJoinSpecs <a name="GenieAgentDefinitionInstructionsJoinSpecs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionInstructionsJoinSpecs: genieAgent.GenieAgentDefinitionInstructionsJoinSpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.left">left</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#left GenieAgent#left}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.right">right</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#right GenieAgent#right}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#comment GenieAgent#comment}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.instruction">instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.relationshipType">relationshipType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#relationship_type GenieAgent#relationship_type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.left"></a>

```typescript
public readonly left: GenieAgentDefinitionInstructionsJoinSpecsLeft;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#left GenieAgent#left}.

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.right"></a>

```typescript
public readonly right: GenieAgentDefinitionInstructionsJoinSpecsRight;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#right GenieAgent#right}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#comment GenieAgent#comment}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}.

---

##### `relationshipType`<sup>Optional</sup> <a name="relationshipType" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.relationshipType"></a>

```typescript
public readonly relationshipType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#relationship_type GenieAgent#relationship_type}.

---

### GenieAgentDefinitionInstructionsJoinSpecsLeft <a name="GenieAgentDefinitionInstructionsJoinSpecsLeft" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionInstructionsJoinSpecsLeft: genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}.

---

### GenieAgentDefinitionInstructionsJoinSpecsRight <a name="GenieAgentDefinitionInstructionsJoinSpecsRight" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionInstructionsJoinSpecsRight: genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}.

---

### GenieAgentDefinitionInstructionsSqlFunctions <a name="GenieAgentDefinitionInstructionsSqlFunctions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionInstructionsSqlFunctions: genieAgent.GenieAgentDefinitionInstructionsSqlFunctions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}.

---

### GenieAgentDefinitionInstructionsSqlSnippets <a name="GenieAgentDefinitionInstructionsSqlSnippets" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionInstructionsSqlSnippets: genieAgent.GenieAgentDefinitionInstructionsSqlSnippets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.expressions">expressions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#expressions GenieAgent#expressions}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.filters">filters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#filters GenieAgent#filters}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.measures">measures</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#measures GenieAgent#measures}. |

---

##### `expressions`<sup>Optional</sup> <a name="expressions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.expressions"></a>

```typescript
public readonly expressions: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#expressions GenieAgent#expressions}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.filters"></a>

```typescript
public readonly filters: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#filters GenieAgent#filters}.

---

##### `measures`<sup>Optional</sup> <a name="measures" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.measures"></a>

```typescript
public readonly measures: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsMeasures[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#measures GenieAgent#measures}.

---

### GenieAgentDefinitionInstructionsSqlSnippetsExpressions <a name="GenieAgentDefinitionInstructionsSqlSnippetsExpressions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionInstructionsSqlSnippetsExpressions: genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.instruction">instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.synonyms">synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}.

---

### GenieAgentDefinitionInstructionsSqlSnippetsFilters <a name="GenieAgentDefinitionInstructionsSqlSnippetsFilters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionInstructionsSqlSnippetsFilters: genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.instruction">instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.synonyms">synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}.

---

### GenieAgentDefinitionInstructionsSqlSnippetsMeasures <a name="GenieAgentDefinitionInstructionsSqlSnippetsMeasures" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionInstructionsSqlSnippetsMeasures: genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.instruction">instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.synonyms">synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}.

---

### GenieAgentDefinitionInstructionsTextInstructions <a name="GenieAgentDefinitionInstructionsTextInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentDefinitionInstructionsTextInstructions: genieAgent.GenieAgentDefinitionInstructionsTextInstructions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#content GenieAgent#content}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#content GenieAgent#content}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GenieAgentProviderConfig <a name="GenieAgentProviderConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

const genieAgentProviderConfig: genieAgent.GenieAgentProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#workspace_id GenieAgent#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#workspace_id GenieAgent#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### GenieAgentDefinitionBenchmarksOutputReference <a name="GenieAgentDefinitionBenchmarksOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionBenchmarksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.putQuestions">putQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.resetQuestions">resetQuestions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQuestions` <a name="putQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.putQuestions"></a>

```typescript
public putQuestions(value: IResolvable | GenieAgentDefinitionBenchmarksQuestions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.putQuestions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>[]

---

##### `resetQuestions` <a name="resetQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.resetQuestions"></a>

```typescript
public resetQuestions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.questions">questions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList">GenieAgentDefinitionBenchmarksQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.questionsInput">questionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `questions`<sup>Required</sup> <a name="questions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.questions"></a>

```typescript
public readonly questions: GenieAgentDefinitionBenchmarksQuestionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList">GenieAgentDefinitionBenchmarksQuestionsList</a>

---

##### `questionsInput`<sup>Optional</sup> <a name="questionsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.questionsInput"></a>

```typescript
public readonly questionsInput: IResolvable | GenieAgentDefinitionBenchmarksQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionBenchmarks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a>

---


### GenieAgentDefinitionBenchmarksQuestionsAnswerList <a name="GenieAgentDefinitionBenchmarksQuestionsAnswerList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.get"></a>

```typescript
public get(index: number): GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionBenchmarksQuestionsAnswer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]

---


### GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference <a name="GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionBenchmarksQuestionsAnswer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>

---


### GenieAgentDefinitionBenchmarksQuestionsList <a name="GenieAgentDefinitionBenchmarksQuestionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionBenchmarksQuestionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.get"></a>

```typescript
public get(index: number): GenieAgentDefinitionBenchmarksQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionBenchmarksQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>[]

---


### GenieAgentDefinitionBenchmarksQuestionsOutputReference <a name="GenieAgentDefinitionBenchmarksQuestionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer">putAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resetAnswer">resetAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote">resetEvaluationNote</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnswer` <a name="putAnswer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer"></a>

```typescript
public putAnswer(value: IResolvable | GenieAgentDefinitionBenchmarksQuestionsAnswer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]

---

##### `resetAnswer` <a name="resetAnswer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resetAnswer"></a>

```typescript
public resetAnswer(): void
```

##### `resetEvaluationNote` <a name="resetEvaluationNote" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote"></a>

```typescript
public resetEvaluationNote(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answer">answer</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList">GenieAgentDefinitionBenchmarksQuestionsAnswerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answerInput">answerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput">evaluationNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.questionInput">questionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote">evaluationNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.question">question</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `answer`<sup>Required</sup> <a name="answer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answer"></a>

```typescript
public readonly answer: GenieAgentDefinitionBenchmarksQuestionsAnswerList;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList">GenieAgentDefinitionBenchmarksQuestionsAnswerList</a>

---

##### `answerInput`<sup>Optional</sup> <a name="answerInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answerInput"></a>

```typescript
public readonly answerInput: IResolvable | GenieAgentDefinitionBenchmarksQuestionsAnswer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]

---

##### `evaluationNoteInput`<sup>Optional</sup> <a name="evaluationNoteInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput"></a>

```typescript
public readonly evaluationNoteInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `questionInput`<sup>Optional</sup> <a name="questionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.questionInput"></a>

```typescript
public readonly questionInput: string;
```

- *Type:* string

---

##### `evaluationNote`<sup>Required</sup> <a name="evaluationNote" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote"></a>

```typescript
public readonly evaluationNote: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionBenchmarksQuestions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>

---


### GenieAgentDefinitionConfigOutputReference <a name="GenieAgentDefinitionConfigOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.putSampleQuestions">putSampleQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.resetSampleQuestions">resetSampleQuestions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSampleQuestions` <a name="putSampleQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.putSampleQuestions"></a>

```typescript
public putSampleQuestions(value: IResolvable | GenieAgentDefinitionConfigSampleQuestions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.putSampleQuestions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>[]

---

##### `resetSampleQuestions` <a name="resetSampleQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.resetSampleQuestions"></a>

```typescript
public resetSampleQuestions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.sampleQuestions">sampleQuestions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList">GenieAgentDefinitionConfigSampleQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.sampleQuestionsInput">sampleQuestionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sampleQuestions`<sup>Required</sup> <a name="sampleQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.sampleQuestions"></a>

```typescript
public readonly sampleQuestions: GenieAgentDefinitionConfigSampleQuestionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList">GenieAgentDefinitionConfigSampleQuestionsList</a>

---

##### `sampleQuestionsInput`<sup>Optional</sup> <a name="sampleQuestionsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.sampleQuestionsInput"></a>

```typescript
public readonly sampleQuestionsInput: IResolvable | GenieAgentDefinitionConfigSampleQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a>

---


### GenieAgentDefinitionConfigSampleQuestionsList <a name="GenieAgentDefinitionConfigSampleQuestionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionConfigSampleQuestionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.get"></a>

```typescript
public get(index: number): GenieAgentDefinitionConfigSampleQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionConfigSampleQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>[]

---


### GenieAgentDefinitionConfigSampleQuestionsOutputReference <a name="GenieAgentDefinitionConfigSampleQuestionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.questionInput">questionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.question">question</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `questionInput`<sup>Optional</sup> <a name="questionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.questionInput"></a>

```typescript
public readonly questionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionConfigSampleQuestions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>

---


### GenieAgentDefinitionDataSourcesMcpConnectionsList <a name="GenieAgentDefinitionDataSourcesMcpConnectionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.get"></a>

```typescript
public get(index: number): GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionDataSourcesMcpConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>[]

---


### GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference <a name="GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput">mcpConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection">mcpConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mcpConnectionInput`<sup>Optional</sup> <a name="mcpConnectionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput"></a>

```typescript
public readonly mcpConnectionInput: string;
```

- *Type:* string

---

##### `mcpConnection`<sup>Required</sup> <a name="mcpConnection" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection"></a>

```typescript
public readonly mcpConnection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionDataSourcesMcpConnections;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>

---


### GenieAgentDefinitionDataSourcesOutputReference <a name="GenieAgentDefinitionDataSourcesOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionDataSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putMcpConnections">putMcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putTables">putTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetMcpConnections">resetMcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetTables">resetTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMcpConnections` <a name="putMcpConnections" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putMcpConnections"></a>

```typescript
public putMcpConnections(value: IResolvable | GenieAgentDefinitionDataSourcesMcpConnections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putMcpConnections.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>[]

---

##### `putTables` <a name="putTables" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putTables"></a>

```typescript
public putTables(value: IResolvable | GenieAgentDefinitionDataSourcesTables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putTables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>[]

---

##### `putVolumes` <a name="putVolumes" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putVolumes"></a>

```typescript
public putVolumes(value: IResolvable | GenieAgentDefinitionDataSourcesVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putVolumes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>[]

---

##### `resetMcpConnections` <a name="resetMcpConnections" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetMcpConnections"></a>

```typescript
public resetMcpConnections(): void
```

##### `resetTables` <a name="resetTables" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetTables"></a>

```typescript
public resetTables(): void
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetVolumes"></a>

```typescript
public resetVolumes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.mcpConnections">mcpConnections</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList">GenieAgentDefinitionDataSourcesMcpConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.tables">tables</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList">GenieAgentDefinitionDataSourcesTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList">GenieAgentDefinitionDataSourcesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.mcpConnectionsInput">mcpConnectionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.tablesInput">tablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.volumesInput">volumesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mcpConnections`<sup>Required</sup> <a name="mcpConnections" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.mcpConnections"></a>

```typescript
public readonly mcpConnections: GenieAgentDefinitionDataSourcesMcpConnectionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList">GenieAgentDefinitionDataSourcesMcpConnectionsList</a>

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.tables"></a>

```typescript
public readonly tables: GenieAgentDefinitionDataSourcesTablesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList">GenieAgentDefinitionDataSourcesTablesList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.volumes"></a>

```typescript
public readonly volumes: GenieAgentDefinitionDataSourcesVolumesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList">GenieAgentDefinitionDataSourcesVolumesList</a>

---

##### `mcpConnectionsInput`<sup>Optional</sup> <a name="mcpConnectionsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.mcpConnectionsInput"></a>

```typescript
public readonly mcpConnectionsInput: IResolvable | GenieAgentDefinitionDataSourcesMcpConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>[]

---

##### `tablesInput`<sup>Optional</sup> <a name="tablesInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.tablesInput"></a>

```typescript
public readonly tablesInput: IResolvable | GenieAgentDefinitionDataSourcesTables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>[]

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.volumesInput"></a>

```typescript
public readonly volumesInput: IResolvable | GenieAgentDefinitionDataSourcesVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionDataSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a>

---


### GenieAgentDefinitionDataSourcesTablesColumnConfigsList <a name="GenieAgentDefinitionDataSourcesTablesColumnConfigsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.get"></a>

```typescript
public get(index: number): GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionDataSourcesTablesColumnConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]

---


### GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference <a name="GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching">resetEnableEntityMatching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance">resetEnableFormatAssistance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnableEntityMatching` <a name="resetEnableEntityMatching" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching"></a>

```typescript
public resetEnableEntityMatching(): void
```

##### `resetEnableFormatAssistance` <a name="resetEnableFormatAssistance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance"></a>

```typescript
public resetEnableFormatAssistance(): void
```

##### `resetExclude` <a name="resetExclude" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude"></a>

```typescript
public resetExclude(): void
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms"></a>

```typescript
public resetSynonyms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput">columnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput">enableEntityMatchingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput">enableFormatAssistanceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput">excludeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column">column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching">enableEntityMatching</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance">enableFormatAssistance</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude">exclude</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enableEntityMatchingInput`<sup>Optional</sup> <a name="enableEntityMatchingInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput"></a>

```typescript
public readonly enableEntityMatchingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableFormatAssistanceInput`<sup>Optional</sup> <a name="enableFormatAssistanceInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput"></a>

```typescript
public readonly enableFormatAssistanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput"></a>

```typescript
public readonly excludeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: string[];
```

- *Type:* string[]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableEntityMatching`<sup>Required</sup> <a name="enableEntityMatching" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching"></a>

```typescript
public readonly enableEntityMatching: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableFormatAssistance`<sup>Required</sup> <a name="enableFormatAssistance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance"></a>

```typescript
public readonly enableFormatAssistance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude"></a>

```typescript
public readonly exclude: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionDataSourcesTablesColumnConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>

---


### GenieAgentDefinitionDataSourcesTablesList <a name="GenieAgentDefinitionDataSourcesTablesList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionDataSourcesTablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.get"></a>

```typescript
public get(index: number): GenieAgentDefinitionDataSourcesTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionDataSourcesTables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>[]

---


### GenieAgentDefinitionDataSourcesTablesOutputReference <a name="GenieAgentDefinitionDataSourcesTablesOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs">putColumnConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resetColumnConfigs">resetColumnConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnConfigs` <a name="putColumnConfigs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs"></a>

```typescript
public putColumnConfigs(value: IResolvable | GenieAgentDefinitionDataSourcesTablesColumnConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]

---

##### `resetColumnConfigs` <a name="resetColumnConfigs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resetColumnConfigs"></a>

```typescript
public resetColumnConfigs(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigs">columnConfigs</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList">GenieAgentDefinitionDataSourcesTablesColumnConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput">columnConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnConfigs`<sup>Required</sup> <a name="columnConfigs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigs"></a>

```typescript
public readonly columnConfigs: GenieAgentDefinitionDataSourcesTablesColumnConfigsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList">GenieAgentDefinitionDataSourcesTablesColumnConfigsList</a>

---

##### `columnConfigsInput`<sup>Optional</sup> <a name="columnConfigsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput"></a>

```typescript
public readonly columnConfigsInput: IResolvable | GenieAgentDefinitionDataSourcesTablesColumnConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionDataSourcesTables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>

---


### GenieAgentDefinitionDataSourcesVolumesList <a name="GenieAgentDefinitionDataSourcesVolumesList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionDataSourcesVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.get"></a>

```typescript
public get(index: number): GenieAgentDefinitionDataSourcesVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionDataSourcesVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>[]

---


### GenieAgentDefinitionDataSourcesVolumesOutputReference <a name="GenieAgentDefinitionDataSourcesVolumesOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionDataSourcesVolumes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsList <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.get"></a>

```typescript
public get(index: number): GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance">resetUsageGuidance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

---

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetUsageGuidance` <a name="resetUsageGuidance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance"></a>

```typescript
public resetUsageGuidance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput">questionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput">usageGuidanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question">question</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance">usageGuidance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

---

##### `questionInput`<sup>Optional</sup> <a name="questionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput"></a>

```typescript
public readonly questionInput: string;
```

- *Type:* string

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `usageGuidanceInput`<sup>Optional</sup> <a name="usageGuidanceInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput"></a>

```typescript
public readonly usageGuidanceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `usageGuidance`<sup>Required</sup> <a name="usageGuidance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance"></a>

```typescript
public readonly usageGuidance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange">putValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange">resetValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueRange` <a name="putValueRange" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange"></a>

```typescript
public putValueRange(value: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---

##### `resetValueRange` <a name="resetValueRange" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange"></a>

```typescript
public resetValueRange(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange">valueRange</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput">valueRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueRange`<sup>Required</sup> <a name="valueRange" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange"></a>

```typescript
public readonly valueRange: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a>

---

##### `valueRangeInput`<sup>Optional</sup> <a name="valueRangeInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput"></a>

```typescript
public readonly valueRangeInput: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax"></a>

```typescript
public resetMax(): void
```

##### `resetMin` <a name="resetMin" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin"></a>

```typescript
public resetMin(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput">maxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput">minInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max">max</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min">min</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: string;
```

- *Type:* string

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max"></a>

```typescript
public readonly max: string;
```

- *Type:* string

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min"></a>

```typescript
public readonly min: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get"></a>

```typescript
public get(index: number): GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue">putDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint">resetTypeHint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultValue` <a name="putDefaultValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue"></a>

```typescript
public putDefaultValue(value: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTypeHint` <a name="resetTypeHint" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint"></a>

```typescript
public resetTypeHint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput">typeHintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint">typeHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeHintInput`<sup>Optional</sup> <a name="typeHintInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput"></a>

```typescript
public readonly typeHintInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `typeHint`<sup>Required</sup> <a name="typeHint" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint"></a>

```typescript
public readonly typeHint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>

---


### GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference <a name="GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias">resetAlias</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsJoinSpecsLeft;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---


### GenieAgentDefinitionInstructionsJoinSpecsList <a name="GenieAgentDefinitionInstructionsJoinSpecsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.get"></a>

```typescript
public get(index: number): GenieAgentDefinitionInstructionsJoinSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsJoinSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>[]

---


### GenieAgentDefinitionInstructionsJoinSpecsOutputReference <a name="GenieAgentDefinitionInstructionsJoinSpecsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft">putLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight">putRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType">resetRelationshipType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLeft` <a name="putLeft" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft"></a>

```typescript
public putLeft(value: GenieAgentDefinitionInstructionsJoinSpecsLeft): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---

##### `putRight` <a name="putRight" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight"></a>

```typescript
public putRight(value: GenieAgentDefinitionInstructionsJoinSpecsRight): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetRelationshipType` <a name="resetRelationshipType" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType"></a>

```typescript
public resetRelationshipType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.left">left</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference">GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.right">right</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference">GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput">instructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.leftInput">leftInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput">relationshipTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.rightInput">rightInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType">relationshipType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.left"></a>

```typescript
public readonly left: GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference">GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference</a>

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.right"></a>

```typescript
public readonly right: GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference">GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput"></a>

```typescript
public readonly instructionInput: string;
```

- *Type:* string

---

##### `leftInput`<sup>Optional</sup> <a name="leftInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.leftInput"></a>

```typescript
public readonly leftInput: IResolvable | GenieAgentDefinitionInstructionsJoinSpecsLeft;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---

##### `relationshipTypeInput`<sup>Optional</sup> <a name="relationshipTypeInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput"></a>

```typescript
public readonly relationshipTypeInput: string;
```

- *Type:* string

---

##### `rightInput`<sup>Optional</sup> <a name="rightInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.rightInput"></a>

```typescript
public readonly rightInput: IResolvable | GenieAgentDefinitionInstructionsJoinSpecsRight;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a>

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `relationshipType`<sup>Required</sup> <a name="relationshipType" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType"></a>

```typescript
public readonly relationshipType: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsJoinSpecs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>

---


### GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference <a name="GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias">resetAlias</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsJoinSpecsRight;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a>

---


### GenieAgentDefinitionInstructionsOutputReference <a name="GenieAgentDefinitionInstructionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls">putExampleQuestionSqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putJoinSpecs">putJoinSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlFunctions">putSqlFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlSnippets">putSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putTextInstructions">putTextInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetExampleQuestionSqls">resetExampleQuestionSqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetJoinSpecs">resetJoinSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetSqlFunctions">resetSqlFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetSqlSnippets">resetSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetTextInstructions">resetTextInstructions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExampleQuestionSqls` <a name="putExampleQuestionSqls" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls"></a>

```typescript
public putExampleQuestionSqls(value: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqls[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]

---

##### `putJoinSpecs` <a name="putJoinSpecs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putJoinSpecs"></a>

```typescript
public putJoinSpecs(value: IResolvable | GenieAgentDefinitionInstructionsJoinSpecs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putJoinSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>[]

---

##### `putSqlFunctions` <a name="putSqlFunctions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlFunctions"></a>

```typescript
public putSqlFunctions(value: IResolvable | GenieAgentDefinitionInstructionsSqlFunctions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlFunctions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>[]

---

##### `putSqlSnippets` <a name="putSqlSnippets" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlSnippets"></a>

```typescript
public putSqlSnippets(value: GenieAgentDefinitionInstructionsSqlSnippets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlSnippets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a>

---

##### `putTextInstructions` <a name="putTextInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putTextInstructions"></a>

```typescript
public putTextInstructions(value: IResolvable | GenieAgentDefinitionInstructionsTextInstructions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putTextInstructions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>[]

---

##### `resetExampleQuestionSqls` <a name="resetExampleQuestionSqls" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetExampleQuestionSqls"></a>

```typescript
public resetExampleQuestionSqls(): void
```

##### `resetJoinSpecs` <a name="resetJoinSpecs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetJoinSpecs"></a>

```typescript
public resetJoinSpecs(): void
```

##### `resetSqlFunctions` <a name="resetSqlFunctions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetSqlFunctions"></a>

```typescript
public resetSqlFunctions(): void
```

##### `resetSqlSnippets` <a name="resetSqlSnippets" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetSqlSnippets"></a>

```typescript
public resetSqlSnippets(): void
```

##### `resetTextInstructions` <a name="resetTextInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetTextInstructions"></a>

```typescript
public resetTextInstructions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqls">exampleQuestionSqls</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList">GenieAgentDefinitionInstructionsExampleQuestionSqlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.joinSpecs">joinSpecs</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList">GenieAgentDefinitionInstructionsJoinSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlFunctions">sqlFunctions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList">GenieAgentDefinitionInstructionsSqlFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlSnippets">sqlSnippets</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference">GenieAgentDefinitionInstructionsSqlSnippetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.textInstructions">textInstructions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList">GenieAgentDefinitionInstructionsTextInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput">exampleQuestionSqlsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.joinSpecsInput">joinSpecsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlFunctionsInput">sqlFunctionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlSnippetsInput">sqlSnippetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.textInstructionsInput">textInstructionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exampleQuestionSqls`<sup>Required</sup> <a name="exampleQuestionSqls" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqls"></a>

```typescript
public readonly exampleQuestionSqls: GenieAgentDefinitionInstructionsExampleQuestionSqlsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList">GenieAgentDefinitionInstructionsExampleQuestionSqlsList</a>

---

##### `joinSpecs`<sup>Required</sup> <a name="joinSpecs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.joinSpecs"></a>

```typescript
public readonly joinSpecs: GenieAgentDefinitionInstructionsJoinSpecsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList">GenieAgentDefinitionInstructionsJoinSpecsList</a>

---

##### `sqlFunctions`<sup>Required</sup> <a name="sqlFunctions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlFunctions"></a>

```typescript
public readonly sqlFunctions: GenieAgentDefinitionInstructionsSqlFunctionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList">GenieAgentDefinitionInstructionsSqlFunctionsList</a>

---

##### `sqlSnippets`<sup>Required</sup> <a name="sqlSnippets" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlSnippets"></a>

```typescript
public readonly sqlSnippets: GenieAgentDefinitionInstructionsSqlSnippetsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference">GenieAgentDefinitionInstructionsSqlSnippetsOutputReference</a>

---

##### `textInstructions`<sup>Required</sup> <a name="textInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.textInstructions"></a>

```typescript
public readonly textInstructions: GenieAgentDefinitionInstructionsTextInstructionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList">GenieAgentDefinitionInstructionsTextInstructionsList</a>

---

##### `exampleQuestionSqlsInput`<sup>Optional</sup> <a name="exampleQuestionSqlsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput"></a>

```typescript
public readonly exampleQuestionSqlsInput: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]

---

##### `joinSpecsInput`<sup>Optional</sup> <a name="joinSpecsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.joinSpecsInput"></a>

```typescript
public readonly joinSpecsInput: IResolvable | GenieAgentDefinitionInstructionsJoinSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>[]

---

##### `sqlFunctionsInput`<sup>Optional</sup> <a name="sqlFunctionsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlFunctionsInput"></a>

```typescript
public readonly sqlFunctionsInput: IResolvable | GenieAgentDefinitionInstructionsSqlFunctions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>[]

---

##### `sqlSnippetsInput`<sup>Optional</sup> <a name="sqlSnippetsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlSnippetsInput"></a>

```typescript
public readonly sqlSnippetsInput: IResolvable | GenieAgentDefinitionInstructionsSqlSnippets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a>

---

##### `textInstructionsInput`<sup>Optional</sup> <a name="textInstructionsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.textInstructionsInput"></a>

```typescript
public readonly textInstructionsInput: IResolvable | GenieAgentDefinitionInstructionsTextInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a>

---


### GenieAgentDefinitionInstructionsSqlFunctionsList <a name="GenieAgentDefinitionInstructionsSqlFunctionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.get"></a>

```typescript
public get(index: number): GenieAgentDefinitionInstructionsSqlFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsSqlFunctions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>[]

---


### GenieAgentDefinitionInstructionsSqlFunctionsOutputReference <a name="GenieAgentDefinitionInstructionsSqlFunctionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsSqlFunctions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>

---


### GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList <a name="GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get"></a>

```typescript
public get(index: number): GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]

---


### GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference <a name="GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms"></a>

```typescript
public resetSynonyms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput">instructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput"></a>

```typescript
public readonly instructionInput: string;
```

- *Type:* string

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: string[];
```

- *Type:* string[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsExpressions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>

---


### GenieAgentDefinitionInstructionsSqlSnippetsFiltersList <a name="GenieAgentDefinitionInstructionsSqlSnippetsFiltersList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get"></a>

```typescript
public get(index: number): GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]

---


### GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference <a name="GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms"></a>

```typescript
public resetSynonyms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput">instructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput"></a>

```typescript
public readonly instructionInput: string;
```

- *Type:* string

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>

---


### GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList <a name="GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get"></a>

```typescript
public get(index: number): GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsMeasures[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]

---


### GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference <a name="GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms"></a>

```typescript
public resetSynonyms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput">instructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput"></a>

```typescript
public readonly instructionInput: string;
```

- *Type:* string

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: string[];
```

- *Type:* string[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsMeasures;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>

---


### GenieAgentDefinitionInstructionsSqlSnippetsOutputReference <a name="GenieAgentDefinitionInstructionsSqlSnippetsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions">putExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures">putMeasures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions">resetExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures">resetMeasures</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpressions` <a name="putExpressions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions"></a>

```typescript
public putExpressions(value: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]

---

##### `putFilters` <a name="putFilters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters"></a>

```typescript
public putFilters(value: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]

---

##### `putMeasures` <a name="putMeasures" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures"></a>

```typescript
public putMeasures(value: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsMeasures[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]

---

##### `resetExpressions` <a name="resetExpressions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions"></a>

```typescript
public resetExpressions(): void
```

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetMeasures` <a name="resetMeasures" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures"></a>

```typescript
public resetMeasures(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressions">expressions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList">GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList">GenieAgentDefinitionInstructionsSqlSnippetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measures">measures</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList">GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput">expressionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput">filtersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput">measuresInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressions`<sup>Required</sup> <a name="expressions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressions"></a>

```typescript
public readonly expressions: GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList">GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filters"></a>

```typescript
public readonly filters: GenieAgentDefinitionInstructionsSqlSnippetsFiltersList;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList">GenieAgentDefinitionInstructionsSqlSnippetsFiltersList</a>

---

##### `measures`<sup>Required</sup> <a name="measures" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measures"></a>

```typescript
public readonly measures: GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList">GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList</a>

---

##### `expressionsInput`<sup>Optional</sup> <a name="expressionsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput"></a>

```typescript
public readonly expressionsInput: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput"></a>

```typescript
public readonly filtersInput: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]

---

##### `measuresInput`<sup>Optional</sup> <a name="measuresInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput"></a>

```typescript
public readonly measuresInput: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsMeasures[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsSqlSnippets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a>

---


### GenieAgentDefinitionInstructionsTextInstructionsList <a name="GenieAgentDefinitionInstructionsTextInstructionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.get"></a>

```typescript
public get(index: number): GenieAgentDefinitionInstructionsTextInstructionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsTextInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>[]

---


### GenieAgentDefinitionInstructionsTextInstructionsOutputReference <a name="GenieAgentDefinitionInstructionsTextInstructionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinitionInstructionsTextInstructions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>

---


### GenieAgentDefinitionOutputReference <a name="GenieAgentDefinitionOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putBenchmarks">putBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putDataSources">putDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putInstructions">putInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetBenchmarks">resetBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetDataSources">resetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetInstructions">resetInstructions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBenchmarks` <a name="putBenchmarks" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putBenchmarks"></a>

```typescript
public putBenchmarks(value: GenieAgentDefinitionBenchmarks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putBenchmarks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a>

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putConfig"></a>

```typescript
public putConfig(value: GenieAgentDefinitionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a>

---

##### `putDataSources` <a name="putDataSources" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putDataSources"></a>

```typescript
public putDataSources(value: GenieAgentDefinitionDataSources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putDataSources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a>

---

##### `putInstructions` <a name="putInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putInstructions"></a>

```typescript
public putInstructions(value: GenieAgentDefinitionInstructions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putInstructions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a>

---

##### `resetBenchmarks` <a name="resetBenchmarks" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetBenchmarks"></a>

```typescript
public resetBenchmarks(): void
```

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetDataSources` <a name="resetDataSources" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetDataSources"></a>

```typescript
public resetDataSources(): void
```

##### `resetInstructions` <a name="resetInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetInstructions"></a>

```typescript
public resetInstructions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.benchmarks">benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference">GenieAgentDefinitionBenchmarksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference">GenieAgentDefinitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference">GenieAgentDefinitionDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.instructions">instructions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference">GenieAgentDefinitionInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.benchmarksInput">benchmarksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.configInput">configInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.dataSourcesInput">dataSourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.instructionsInput">instructionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `benchmarks`<sup>Required</sup> <a name="benchmarks" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.benchmarks"></a>

```typescript
public readonly benchmarks: GenieAgentDefinitionBenchmarksOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference">GenieAgentDefinitionBenchmarksOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.config"></a>

```typescript
public readonly config: GenieAgentDefinitionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference">GenieAgentDefinitionConfigOutputReference</a>

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.dataSources"></a>

```typescript
public readonly dataSources: GenieAgentDefinitionDataSourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference">GenieAgentDefinitionDataSourcesOutputReference</a>

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.instructions"></a>

```typescript
public readonly instructions: GenieAgentDefinitionInstructionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference">GenieAgentDefinitionInstructionsOutputReference</a>

---

##### `benchmarksInput`<sup>Optional</sup> <a name="benchmarksInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.benchmarksInput"></a>

```typescript
public readonly benchmarksInput: IResolvable | GenieAgentDefinitionBenchmarks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | GenieAgentDefinitionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a>

---

##### `dataSourcesInput`<sup>Optional</sup> <a name="dataSourcesInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.dataSourcesInput"></a>

```typescript
public readonly dataSourcesInput: IResolvable | GenieAgentDefinitionDataSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a>

---

##### `instructionsInput`<sup>Optional</sup> <a name="instructionsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.instructionsInput"></a>

```typescript
public readonly instructionsInput: IResolvable | GenieAgentDefinitionInstructions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a>

---


### GenieAgentProviderConfigOutputReference <a name="GenieAgentProviderConfigOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.Initializer"></a>

```typescript
import { genieAgent } from '@cdktn/provider-databricks'

new genieAgent.GenieAgentProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenieAgentProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a>

---



