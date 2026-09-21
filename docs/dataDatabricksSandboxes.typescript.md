# `dataDatabricksSandboxes` Submodule <a name="`dataDatabricksSandboxes` Submodule" id="@cdktn/provider-databricks.dataDatabricksSandboxes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSandboxes <a name="DataDatabricksSandboxes" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes databricks_sandboxes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.Initializer"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

new dataDatabricksSandboxes.DataDatabricksSandboxes(scope: Construct, id: string, config?: DataDatabricksSandboxesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig">DataDatabricksSandboxesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig">DataDatabricksSandboxesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksSandboxesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfig">DataDatabricksSandboxesProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksSandboxes resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.isConstruct"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

dataDatabricksSandboxes.DataDatabricksSandboxes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.isTerraformElement"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

dataDatabricksSandboxes.DataDatabricksSandboxes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.isTerraformDataSource"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

dataDatabricksSandboxes.DataDatabricksSandboxes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.generateConfigForImport"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

dataDatabricksSandboxes.DataDatabricksSandboxes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksSandboxes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksSandboxes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksSandboxes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksSandboxes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference">DataDatabricksSandboxesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.sandboxes">sandboxes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList">DataDatabricksSandboxesSandboxesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfig">DataDatabricksSandboxesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksSandboxesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference">DataDatabricksSandboxesProviderConfigOutputReference</a>

---

##### `sandboxes`<sup>Required</sup> <a name="sandboxes" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.sandboxes"></a>

```typescript
public readonly sandboxes: DataDatabricksSandboxesSandboxesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList">DataDatabricksSandboxesSandboxesList</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksSandboxesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfig">DataDatabricksSandboxesProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSandboxesConfig <a name="DataDatabricksSandboxesConfig" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.Initializer"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

const dataDatabricksSandboxesConfig: dataDatabricksSandboxes.DataDatabricksSandboxesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes#page_size DataDatabricksSandboxes#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfig">DataDatabricksSandboxesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes#provider_config DataDatabricksSandboxes#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes#page_size DataDatabricksSandboxes#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksSandboxesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfig">DataDatabricksSandboxesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes#provider_config DataDatabricksSandboxes#provider_config}.

---

### DataDatabricksSandboxesProviderConfig <a name="DataDatabricksSandboxesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

const dataDatabricksSandboxesProviderConfig: dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes#workspace_id DataDatabricksSandboxes#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes#workspace_id DataDatabricksSandboxes#workspace_id}.

---

### DataDatabricksSandboxesSandboxes <a name="DataDatabricksSandboxesSandboxes" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxes.Initializer"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

const dataDatabricksSandboxesSandboxes: dataDatabricksSandboxes.DataDatabricksSandboxesSandboxes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxes.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes#name DataDatabricksSandboxes#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxes.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfig">DataDatabricksSandboxesSandboxesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes#provider_config DataDatabricksSandboxes#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes#name DataDatabricksSandboxes#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxes.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksSandboxesSandboxesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfig">DataDatabricksSandboxesSandboxesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes#provider_config DataDatabricksSandboxes#provider_config}.

---

### DataDatabricksSandboxesSandboxesProviderConfig <a name="DataDatabricksSandboxesSandboxesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

const dataDatabricksSandboxesSandboxesProviderConfig: dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes#workspace_id DataDatabricksSandboxes#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes#workspace_id DataDatabricksSandboxes#workspace_id}.

---

### DataDatabricksSandboxesSandboxesSpec <a name="DataDatabricksSandboxesSandboxesSpec" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpec.Initializer"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

const dataDatabricksSandboxesSandboxesSpec: dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpec.property.compute">compute</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecCompute">DataDatabricksSandboxesSandboxesSpecCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes#compute DataDatabricksSandboxes#compute}. |

---

##### `compute`<sup>Optional</sup> <a name="compute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpec.property.compute"></a>

```typescript
public readonly compute: DataDatabricksSandboxesSandboxesSpecCompute;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecCompute">DataDatabricksSandboxesSandboxesSpecCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes#compute DataDatabricksSandboxes#compute}.

---

### DataDatabricksSandboxesSandboxesSpecCompute <a name="DataDatabricksSandboxesSandboxesSpecCompute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecCompute.Initializer"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

const dataDatabricksSandboxesSandboxesSpecCompute: dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecCompute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecCompute.property.inactivityTimeout">inactivityTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes#inactivity_timeout DataDatabricksSandboxes#inactivity_timeout}. |

---

##### `inactivityTimeout`<sup>Optional</sup> <a name="inactivityTimeout" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecCompute.property.inactivityTimeout"></a>

```typescript
public readonly inactivityTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/sandboxes#inactivity_timeout DataDatabricksSandboxes#inactivity_timeout}.

---

### DataDatabricksSandboxesSandboxesStatus <a name="DataDatabricksSandboxesSandboxesStatus" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatus.Initializer"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

const dataDatabricksSandboxesSandboxesStatus: dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatus = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSandboxesProviderConfigOutputReference <a name="DataDatabricksSandboxesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

new dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfig">DataDatabricksSandboxesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksSandboxesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesProviderConfig">DataDatabricksSandboxesProviderConfig</a>

---


### DataDatabricksSandboxesSandboxesList <a name="DataDatabricksSandboxesSandboxesList" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.Initializer"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

new dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.get"></a>

```typescript
public get(index: number): DataDatabricksSandboxesSandboxesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxes">DataDatabricksSandboxesSandboxes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksSandboxesSandboxes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxes">DataDatabricksSandboxesSandboxes</a>[]

---


### DataDatabricksSandboxesSandboxesOutputReference <a name="DataDatabricksSandboxesSandboxesOutputReference" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

new dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksSandboxesSandboxesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfig">DataDatabricksSandboxesSandboxesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference">DataDatabricksSandboxesSandboxesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference">DataDatabricksSandboxesSandboxesSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference">DataDatabricksSandboxesSandboxesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfig">DataDatabricksSandboxesSandboxesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxes">DataDatabricksSandboxesSandboxes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksSandboxesSandboxesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference">DataDatabricksSandboxesSandboxesProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.spec"></a>

```typescript
public readonly spec: DataDatabricksSandboxesSandboxesSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference">DataDatabricksSandboxesSandboxesSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.status"></a>

```typescript
public readonly status: DataDatabricksSandboxesSandboxesStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference">DataDatabricksSandboxesSandboxesStatusOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksSandboxesSandboxesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfig">DataDatabricksSandboxesSandboxesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSandboxesSandboxes;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxes">DataDatabricksSandboxesSandboxes</a>

---


### DataDatabricksSandboxesSandboxesProviderConfigOutputReference <a name="DataDatabricksSandboxesSandboxesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

new dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfig">DataDatabricksSandboxesSandboxesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksSandboxesSandboxesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesProviderConfig">DataDatabricksSandboxesSandboxesProviderConfig</a>

---


### DataDatabricksSandboxesSandboxesSpecComputeOutputReference <a name="DataDatabricksSandboxesSandboxesSpecComputeOutputReference" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

new dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.resetInactivityTimeout">resetInactivityTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInactivityTimeout` <a name="resetInactivityTimeout" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.resetInactivityTimeout"></a>

```typescript
public resetInactivityTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.property.inactivityTimeoutInput">inactivityTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.property.inactivityTimeout">inactivityTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecCompute">DataDatabricksSandboxesSandboxesSpecCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inactivityTimeoutInput`<sup>Optional</sup> <a name="inactivityTimeoutInput" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.property.inactivityTimeoutInput"></a>

```typescript
public readonly inactivityTimeoutInput: string;
```

- *Type:* string

---

##### `inactivityTimeout`<sup>Required</sup> <a name="inactivityTimeout" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.property.inactivityTimeout"></a>

```typescript
public readonly inactivityTimeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksSandboxesSandboxesSpecCompute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecCompute">DataDatabricksSandboxesSandboxesSpecCompute</a>

---


### DataDatabricksSandboxesSandboxesSpecOutputReference <a name="DataDatabricksSandboxesSandboxesSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

new dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.putCompute">putCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.resetCompute">resetCompute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCompute` <a name="putCompute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.putCompute"></a>

```typescript
public putCompute(value: DataDatabricksSandboxesSandboxesSpecCompute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.putCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecCompute">DataDatabricksSandboxesSandboxesSpecCompute</a>

---

##### `resetCompute` <a name="resetCompute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.resetCompute"></a>

```typescript
public resetCompute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.property.compute">compute</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference">DataDatabricksSandboxesSandboxesSpecComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.property.computeInput">computeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecCompute">DataDatabricksSandboxesSandboxesSpecCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpec">DataDatabricksSandboxesSandboxesSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.property.compute"></a>

```typescript
public readonly compute: DataDatabricksSandboxesSandboxesSpecComputeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecComputeOutputReference">DataDatabricksSandboxesSandboxesSpecComputeOutputReference</a>

---

##### `computeInput`<sup>Optional</sup> <a name="computeInput" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.property.computeInput"></a>

```typescript
public readonly computeInput: IResolvable | DataDatabricksSandboxesSandboxesSpecCompute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecCompute">DataDatabricksSandboxesSandboxesSpecCompute</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSandboxesSandboxesSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesSpec">DataDatabricksSandboxesSandboxesSpec</a>

---


### DataDatabricksSandboxesSandboxesStatusOutputReference <a name="DataDatabricksSandboxesSandboxesStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSandboxes } from '@cdktn/provider-databricks'

new dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatus">DataDatabricksSandboxesSandboxesStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSandboxesSandboxesStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSandboxes.DataDatabricksSandboxesSandboxesStatus">DataDatabricksSandboxesSandboxesStatus</a>

---



